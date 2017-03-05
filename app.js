
var chalk = require('chalk');
var bb = require('blue-button');
var fs = require('fs');
var prompt = require('prompt');

var xml = fs.readFileSync('./ccd/Patient-100.xml', 'utf-8');
var ccd = bb.parse(xml);

console.log('This is a tutorial on how to parse an xml health summary');
console.log('Code you will type is shown in green, annotations are shown in white');
prompt.start();
prompt.get(['Press Enter when ready to start'], function (err) {
	console.log('The first thing you need to do is require libraries to use.');
	console.log('blue-button is a library for parsing XML clinical documents');
	console.log('fs is a library for accessing the filesystem on your computer');
	console.log(chalk.green("var bb = require('blue-button');"));
	console.log(chalk.green("var fs = require('fs');"));
	prompt.get(['Press Enter when ready to continue'], function (err) {
		console.log('Next we need to create a variable with the XML we wish to parse.');
		console.log('For this tutorial, we will use Continuity of Care Documents in the "ccd" folder.');
		console.log('We will use the filesystem library to read one as a utf-8 string variable');
		console.log(chalk.green("var xml = fs.readFileSync('./ccd/Patient-100.xml', 'utf-8');"));
		prompt.get(['Press Enter when ready to continue'], function (err) {
			console.log('Next we will parse the document using the library of blue-button.');
			console.log('This turns the XML string in JavaScript Object Notation (JSON).');
			console.log(chalk.green("var ccd = bb.parse(xml);"));	
			prompt.get(['Press Enter when ready to continue'], function (err) {
			
			});
		});
	});
});


