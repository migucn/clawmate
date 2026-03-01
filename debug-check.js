const { execSync } = require('child_process');
const os = require('os');

console.log('Platform:', os.platform());
console.log('PATH:', process.env.PATH);

try {
  console.log('Trying: where openclaw');
  console.log(execSync('where openclaw').toString());
} catch (e) {
  console.log('where openclaw failed:', e.message);
}

try {
  console.log('Trying: openclaw --version');
  console.log(execSync('openclaw --version').toString());
} catch (e) {
  console.log('openclaw --version failed:', e.message);
}

try {
  console.log('Trying: openclaw.cmd --version');
  console.log(execSync('openclaw.cmd --version').toString());
} catch (e) {
  console.log('openclaw.cmd --version failed:', e.message);
}
