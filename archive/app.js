
var chalk = require('chalk');
var bb = require('blue-button');
var fs = require('fs');
var prompt = require('prompt');

var xml = fs.readFileSync('./ccd/Patient-0.xml', 'utf-8');
var ccd = bb.parse(xml);

console.log('This is a tutorial on how to parse an xml health summary');
console.log('Code you will type is shown in yellow, annotations are shown in white');
console.log('This tutorial assumes you have installed blue-button (using ' + chalk.yellow('npm install blue-button') + ' from command line)');
prompt.start();
prompt.get(['Press Enter when ready to start'], function (err) {
	console.log('The first thing you need to do is require libraries to use.');
	console.log('blue-button is a library for parsing XML clinical documents');
	console.log('fs is a library for accessing the filesystem on your computer');
	console.log(chalk.yellow("var bb = require('blue-button');"));
	console.log(chalk.yellow("var fs = require('fs');"));
	prompt.get(['Press Enter when ready to continue'], function (err) {
		console.log('Next we need to create a variable with the XML we wish to parse.');
		console.log('For this tutorial, we will use Continuity of Care Documents in the "ccd" folder.');
		console.log('We will use the filesystem library to read one as a utf-8 string variable');
		console.log(chalk.yellow("var xml = fs.readFileSync('./ccd/Patient-100.xml', 'utf-8');"));
		prompt.get(['Press Enter when ready to continue'], function (err) {
			console.log('Next we will parse the document using the library of blue-button.');
			console.log('This turns the XML string in JavaScript Object Notation (JSON).');
			console.log(chalk.yellow("var ccd = bb.parse(xml);"));	
			prompt.get(['Press Enter when ready to continue'], function (err) {
				console.log('Now we will access some demographic information. This will show the JSON of the name object from XML parsing');
				console.log(chalk.yellow('ccd.data.demographics.name'));	
				console.log(ccd.data.demographics.name);
				prompt.get(['Press Enter when ready to continue'], function (err) {
					console.log('While the name was JSON, much of the clinical data are stored in arrays.');
					console.log('We can count the number of medications by using the length property of the array');
					console.log(chalk.yellow('ccd.data.medications.length'));
					console.log(ccd.data.medications.length);
				});
			});
		});
	});
});


