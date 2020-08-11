const fs = require('fs');
fs.writeFile('text.txt', 'nuevo archivo test', function (err) {
    if (err) return console.log(err);
    console.log('el archivo ha sido creado');
});

