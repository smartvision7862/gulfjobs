/**
 * daily-update.js
 * Run by GitHub Actions every day at 6 AM UTC.
 * 
 * What it does:
 *  1. Reads jobs-data.json
 *  2. Removes jobs older than MAX_AGE_DAYS (8 days)
 *  3. Picks NEW_JOBS_PER_DAY jobs from jobs-pool.json (round-robin)
 *  4. Assigns today's dateAdded and "Today" postedDate to new jobs
 *  5. Saves updated jobs-data.json
 *  6. Updates pool-index.json to track which pool jobs have been used
 */

const fs = require('fs');
const path = require('path');

// ── Configuration ──────────────────────────────────────────────
const MAX_AGE_DAYS     = 8;    // Remove jobs older than this
const NEW_JOBS_PER_DAY = 3;    // Add this many new jobs each day
// ──────────────────────────────────────────────────────────────

const rootDir      = path.join(__dirname, '..');
const dataFile     = path.join(rootDir, 'jobs-data.json');
const poolFile     = path.join(rootDir, 'jobs-pool.json');
const indexFile    = path.join(rootDir, 'pool-index.json');

// ── Helpers ────────────────────────────────────────────────────
function today() {
    return new Date().toISOString().split('T')[0]; // YYYY-MM-DD
}

function daysBetween(dateStr) {
    const d1 = new Date(today());
    const d2 = new Date(dateStr);
    return Math.round((d1 - d2) / (1000 * 60 * 60 * 24));
}

function postedDateText(daysAgo) {
    if (daysAgo === 0) return 'Today';
    if (daysAgo === 1) return '1 day ago';
    if (daysAgo <= 6) return `${daysAgo} days ago`;
    return '1 week ago';
}
// ──────────────────────────────────────────────────────────────

console.log('═══════════════════════════════════════');
console.log(' GullfJob Daily Update — ' + today());
console.log('═══════════════════════════════════════');

// 1. Load current jobs
let jobs = [];
if (fs.existsSync(dataFile)) {
    jobs = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
    console.log(`\n📋 Loaded ${jobs.length} jobs from jobs-data.json`);
} else {
    console.error('❌ jobs-data.json not found!');
    process.exit(1);
}

// 2. Remove expired jobs (> MAX_AGE_DAYS old)
const beforeCount = jobs.length;
jobs = jobs.filter(job => {
    if (!job.dateAdded) return true; // Keep jobs without date (default/permanent)
    const age = daysBetween(job.dateAdded);
    if (age > MAX_AGE_DAYS) {
        console.log(`  🗑️  Removing (${age}d old): [${job.id}] ${job.title} @ ${job.company}`);
        return false;
    }
    return true;
});
const removedCount = beforeCount - jobs.length;
console.log(`\n🗑️  Removed ${removedCount} expired job(s) (older than ${MAX_AGE_DAYS} days)`);

// 3. Update postedDate text to stay accurate
jobs = jobs.map(job => {
    if (!job.dateAdded) return job;
    const age = daysBetween(job.dateAdded);
    return { ...job, postedDate: postedDateText(age) };
});

// 4. Load pool and index
if (!fs.existsSync(poolFile)) {
    console.error('❌ jobs-pool.json not found!');
    process.exit(1);
}
const pool = JSON.parse(fs.readFileSync(poolFile, 'utf8'));

// Load or initialise pool rotation index
let poolIndex = { nextIndex: 0, usedIds: [] };
if (fs.existsSync(indexFile)) {
    poolIndex = JSON.parse(fs.readFileSync(indexFile, 'utf8'));
}

// 5. Pick new jobs from pool (round-robin, skip already in active db)
const existingIds = new Set(jobs.map(j => j.id));
let added = 0;
const todayStr = today();

for (let attempts = 0; attempts < pool.length && added < NEW_JOBS_PER_DAY; attempts++) {
    const poolJob = pool[poolIndex.nextIndex % pool.length];
    poolIndex.nextIndex = (poolIndex.nextIndex + 1) % pool.length;

    if (existingIds.has(poolJob.id)) {
        // Already active — skip
        continue;
    }

    // Give it a fresh ID based on timestamp so it can be re-added in future rotations
    const newJob = {
        ...poolJob,
        id: `${poolJob.id}-${todayStr}`,
        dateAdded: todayStr,
        postedDate: 'Today',
        featured: poolJob.featured || false
    };

    jobs.unshift(newJob); // Add to front (newest first)
    existingIds.add(newJob.id);
    added++;
    console.log(`  ✅ Added: [${newJob.id}] ${newJob.title} @ ${newJob.company}`);
}

console.log(`\n➕ Added ${added} new job(s) from pool`);

// 6. Save updated jobs-data.json
fs.writeFileSync(dataFile, JSON.stringify(jobs, null, 2));
console.log(`\n💾 Saved ${jobs.length} jobs to jobs-data.json`);

// 7. Save pool index
fs.writeFileSync(indexFile, JSON.stringify(poolIndex, null, 2));
console.log(`📊 Pool index updated (next: ${poolIndex.nextIndex})`);

// 8. Summary
console.log('\n═══════════════════════════════════════');
console.log(` ✅ Update complete!`);
console.log(` Total jobs: ${jobs.length}`);
console.log(` Removed: ${removedCount} | Added: ${added}`);
const catCounts = {};
jobs.forEach(j => { catCounts[j.category] = (catCounts[j.category] || 0) + 1; });
Object.entries(catCounts).sort((a,b) => b[1]-a[1]).forEach(([cat, count]) => {
    console.log(`   ${cat}: ${count}`);
});
console.log('═══════════════════════════════════════');
