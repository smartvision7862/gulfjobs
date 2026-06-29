/**
 * extract-jobs.js
 * Run once locally: node scripts/extract-jobs.js
 * Converts the app.js defaultJobs array into jobs-data.json with dateAdded timestamps.
 */
const fs = require('fs');
const vm = require('vm');
const path = require('path');

const appJsPath = path.join(__dirname, '..', 'app.js');
const outputPath = path.join(__dirname, '..', 'jobs-data.json');

const appJs = fs.readFileSync(appJsPath, 'utf8');

// Find start and end of the defaultJobs array
const startToken = 'const defaultJobs = [';
const startIdx = appJs.indexOf(startToken);
if (startIdx === -1) { console.error('Could not find defaultJobs'); process.exit(1); }

// Find the matching closing bracket using depth counter
let depth = 0;
let endIdx = -1;
for (let i = startIdx + startToken.length - 1; i < appJs.length; i++) {
    if (appJs[i] === '[') depth++;
    else if (appJs[i] === ']') {
        depth--;
        if (depth === 0) { endIdx = i; break; }
    }
}

if (endIdx === -1) { console.error('Could not find end of defaultJobs'); process.exit(1); }

const jobsSection = 'var defaultJobs = ' + appJs.slice(startIdx + 'const defaultJobs = '.length, endIdx + 1) + ';';

// Evaluate safely in a VM context
const context = {};
try {
    vm.runInNewContext(jobsSection, context);
} catch (e) {
    console.error('Error evaluating jobs:', e.message);
    process.exit(1);
}

const defaultJobs = context.defaultJobs || [];
if (!defaultJobs.length) { console.error('No jobs found!'); process.exit(1); }

// Assign dateAdded based on postedDate field
const today = new Date();
today.setHours(0, 0, 0, 0);

const jobs = defaultJobs.map(job => {
    let daysAgo = 0;
    const pd = (job.postedDate || '').toLowerCase();
    if (pd === 'today') daysAgo = 0;
    else if (pd === '1 day ago') daysAgo = 1;
    else if (pd === '2 days ago') daysAgo = 2;
    else if (pd === '3 days ago') daysAgo = 3;
    else if (pd.includes('week')) daysAgo = 7;
    else daysAgo = Math.floor(Math.random() * 4) + 1; // 1-4 days

    const dateAdded = new Date(today);
    dateAdded.setDate(dateAdded.getDate() - daysAgo);

    return {
        ...job,
        dateAdded: dateAdded.toISOString().split('T')[0]
    };
});

fs.writeFileSync(outputPath, JSON.stringify(jobs, null, 2));
console.log(`✅ Extracted ${jobs.length} jobs to jobs-data.json`);
console.log('   dateAdded range:', jobs.map(j => j.dateAdded).sort()[0], '→', jobs.map(j => j.dateAdded).sort().reverse()[0]);
