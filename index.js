/*var fs = require('fs');
var colors = require('colors');

fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
    console.log('Dane przed zapisem!'.blue);
    console.log(data);
    fs.appendFile('./tekst.txt', '\nA tak wyglądają po zapisie!', function(err) {
        if (err) throw err;
        console.log('Zapisano!'.blue);
        fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
            console.log('Dane po zapisie'.blue)
            console.log(data);
        });
    });
});
*/
var fs = require('fs');
var colors = require('colors');


fs.readdir('./', 'utf-8', function(err, files) {
	console.log(files);
	if(err) throw err;

	fs.appendFile('./tekst.txt', files.join(', '), function(err, data) { //data?
		if(err) throw err;

		console.log('\nKoniec zapisywania'.blue);


		fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
			console.log('Dane po zapisie'.red);
			console.log(data);
		});
	});
});
