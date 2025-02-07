const pug = require('pug');
const fs = require('fs');

// Compile template Pug menjadi HTML
const compiledFunction = pug.compileFile('template.pug');

// Tulis hasil render ke file HTML
fs.writeFileSync('app.html', compiledFunction());
console.log('File HTML berhasil dibuat: app.html');
