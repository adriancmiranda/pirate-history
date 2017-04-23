const fs = require('fs');
const path = require('path');
const { exec } = require('child-process-promise');

const examples = fs.readdirSync(__dirname).filter(dirname =>
  fs.statSync(path.join(__dirname, dirname)).isDirectory()
).map(dirname => path.join(__dirname, dirname));

const stack = examples.map(dirname =>
  `cd ${dirname} && npm i --silent && npm run build`
).map(cmd => exec(cmd));

module.exports = Promise.all(stack).then((response) => {
  return response;
}).catch((reason) => {
  console.error(reason.stack);
  process.exit(1);
});
