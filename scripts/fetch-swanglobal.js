/**
 * fetch-swanglobal.js
 * Scrapes active job listings from Swan Global Careers page (https://swanglobal.careers-page.com)
 * Updates jobs-pool.json and prepends fresh jobs to jobs-data.json.
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const rootDir = path.join(__dirname, '..');
const poolFile = path.join(rootDir, 'jobs-pool.json');
const dataFile = path.join(rootDir, 'jobs-data.json');

function fetchPage(page) {
    return new Promise((resolve, reject) => {
        const url = `https://swanglobal.careers-page.com/?page=${page}`;
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', err => reject(err));
    });
}

function getCategory(title) {
    const t = title.toLowerCase();
    if (t.includes('engineer') || t.includes('technician') || t.includes('inspector') || t.includes('supervisor') || t.includes('piping') || t.includes('refrigeration') || t.includes('electrical') || t.includes('maintenance') || t.includes('cad')) return 'Engineering';
    if (t.includes('it') || t.includes('system') || t.includes('data') || t.includes('developer') || t.includes('software') || t.includes('digital') || t.includes('network')) return 'IT & Tech';
    if (t.includes('recruitment') || t.includes('hr') || t.includes('admin') || t.includes('consultant') || t.includes('contract') || t.includes('coordinator') || t.includes('manager')) return 'Management & HR';
    if (t.includes('doctor') || t.includes('nurse') || t.includes('medical') || t.includes('health') || t.includes('pharmacy')) return 'Healthcare';
    if (t.includes('chef') || t.includes('hotel') || t.includes('waiter') || t.includes('hospitality') || t.includes('cook')) return 'Hospitality';
    if (t.includes('accountant') || t.includes('finance') || t.includes('audit') || t.includes('tax')) return 'Finance & Accounting';
    return 'Engineering';
}

function getExperience(title) {
    const t = title.toLowerCase();
    if (t.includes('senior') || t.includes('lead') || t.includes('manager') || t.includes('consultant') || t.includes('head')) return 'Senior Level';
    if (t.includes('inspector') || t.includes('supervisor') || t.includes('officer') || t.includes('specialist')) return 'Mid Level';
    return 'Entry / Mid Level';
}

function getSalary(country) {
    if (country === 'Qatar') return 'QAR 8,000 - 15,000';
    if (country === 'Saudi Arabia') return 'SAR 10,000 - 18,000';
    if (country === 'United Arab Emirates' || country === 'UAE') return 'AED 10,000 - 18,000';
    return 'QAR 9,000 - 16,000';
}

function today() {
    return new Date().toISOString().split('T')[0];
}

async function scrapeSwanGlobal(maxPages = 3) {
    console.log('═══════════════════════════════════════');
    console.log(' Fetching Swan Global Jobs — ' + today());
    console.log(' https://swanglobal.careers-page.com');
    console.log('═══════════════════════════════════════');

    const scrapedJobs = [];
    const seenIds = new Set();

    for (let p = 1; p <= maxPages; p++) {
        console.log(`📡 Fetching page ${p}...`);
        try {
            const html = await fetchPage(p);
            const regex = /<a href="\/jobs\/([^"]+)"[\s\S]*?data-job-title="([^"]+)"[\s\S]*?data-job-city="([^"]*)"[\s\S]*?data-job-country="([^"]*)"/g;
            let match;
            let countOnPage = 0;

            while ((match = regex.exec(html)) !== null) {
                const fullId = match[1];
                const rawTitle = match[2].replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').trim();
                const city = match[3] || 'Doha';
                const country = match[4] || 'Qatar';
                const location = city && country ? `${city}, ${country}` : (country || city || 'Doha, Qatar');
                const swanId = `swan-${fullId.slice(0, 8)}`;

                if (seenIds.has(swanId)) continue;
                seenIds.add(swanId);

                scrapedJobs.push({
                    id: swanId,
                    title: rawTitle,
                    company: 'Swan Global',
                    logoLetters: 'SG',
                    location: location,
                    category: getCategory(rawTitle),
                    jobType: 'Full-time',
                    experience: getExperience(rawTitle),
                    salary: getSalary(country),
                    featured: true,
                    applyUrl: `https://swanglobal.careers-page.com/jobs/${fullId}/apply`,
                    applyEmail: 'careers@swan.qa',
                    description: `Swan Global is seeking a qualified ${rawTitle} to join client operations in ${location}. Apply directly via Swan Global Careers Portal.`,
                    responsibilities: [
                        `Execute duties as ${rawTitle} in accordance with industry standards.`,
                        `Collaborate with site supervisors and management in ${location}.`,
                        `Maintain strict compliance with safety, quality control, and reporting.`
                    ],
                    requirements: [
                        `Relevant technical qualification or degree for ${rawTitle}.`,
                        `Proven hands-on experience in ${location} or GCC region.`,
                        `Strong communication and teamwork capabilities.`
                    ]
                });
                countOnPage++;
            }
            console.log(`  Found ${countOnPage} new jobs on page ${p}`);
            if (countOnPage === 0) break;
        } catch (err) {
            console.error(`❌ Error fetching page ${p}:`, err.message);
            break;
        }
    }

    console.log(`\n Total unique Swan Global jobs extracted: ${scrapedJobs.length}`);

    // Update jobs-pool.json
    let pool = [];
    if (fs.existsSync(poolFile)) {
        pool = JSON.parse(fs.readFileSync(poolFile, 'utf8'));
    }
    const poolIds = new Set(pool.map(j => j.id));
    let poolAdded = 0;

    scrapedJobs.forEach(job => {
        if (!poolIds.has(job.id)) {
            pool.unshift(job); // add newest to front of pool
            poolIds.add(job.id);
            poolAdded++;
        }
    });

    fs.writeFileSync(poolFile, JSON.stringify(pool, null, 2));
    console.log(`💾 Updated jobs-pool.json (+${poolAdded} new, total pool: ${pool.length})`);

    // Merge into jobs-data.json
    let activeJobs = [];
    if (fs.existsSync(dataFile)) {
        activeJobs = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
    }
    const activeIds = new Set(activeJobs.map(j => j.id));
    let activeAdded = 0;
    const todayStr = today();

    // Add top 8 scraped jobs directly to active jobs-data.json if not present
    scrapedJobs.slice(0, 8).forEach(job => {
        if (!activeIds.has(job.id)) {
            const newActive = {
                ...job,
                dateAdded: todayStr,
                postedDate: 'Today'
            };
            activeJobs.unshift(newActive);
            activeIds.add(job.id);
            activeAdded++;
            console.log(`  ⭐ Added live job to active data: ${job.title} @ ${job.location}`);
        }
    });

    if (activeAdded > 0) {
        fs.writeFileSync(dataFile, JSON.stringify(activeJobs, null, 2));
        console.log(`💾 Updated jobs-data.json (+${activeAdded} active jobs, total: ${activeJobs.length})`);
    }

    return scrapedJobs;
}

if (require.main === module) {
    scrapeSwanGlobal();
}

module.exports = { scrapeSwanGlobal };
