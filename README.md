# starve-sync
const fs = require('fs');
(async () => {
  const html = await (await fetch('https://starve.io/')).text();
  const srcs = [...html.matchAll(/src="(\/?js\/[^"?]+\.js)/g)].map(m => m[1]);
  const game = srcs.find(s => !/jquery|howler|token/i.test(s));
  if (!game) { console.error('Fichier du jeu introuvable'); process.exit(1); }
  const url = 'https://starve.io/' + game.replace(/^\//, '');
  const code = await (await fetch(url)).text();
  fs.writeFileSync('original.js', code);
  console.log('OK', url, code.length);
})();
