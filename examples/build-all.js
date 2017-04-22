const fs = require('fs');
const path = require('path');

const examples = fs.readdirSync(__dirname).filter(dirname =>
  fs.statSync(path.join(__dirname, dirname)).isDirectory()
).map(dirname => path.join(__dirname, dirname));

module.exports = null;
