const fs = require('fs');
const patches = require('./patches.js');
let code = fs.readFileSync('original.js', 'utf8');
let broken = false;
for (const p of patches) {
  if (!p.find.test(code)) { console.error('PATCH CASSE :', p.name); broken = true; continue; }
  code = code.replace(p.find, p.replace);
}
if (broken) process.exit(1);
fs.writeFileSync('patched.js', code);
console.log('patched.js genere');
