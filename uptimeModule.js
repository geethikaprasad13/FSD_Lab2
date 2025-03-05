const os = require('os');
const uptimeSeconds = os.uptime(); 
const days = Math.floor(uptimeSeconds / (24 * 3600));
const hours = Math.floor((uptimeSeconds % (24 * 3600)) / 3600);
const minutes = Math.floor((uptimeSeconds % 3600) / 60);
const seconds = Math.floor(uptimeSeconds % 60);
console.log(`System Uptime: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
