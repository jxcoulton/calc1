const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);

	console.log('mathSymbol', mathSymbol);
	console.log('num1', num1);
	console.log('num2', num2);

	if (mathSymbol === `+`){
		console.log(num1 + num2);
	} else if (mathSymbol === `-`){
		console.log(num1 - num2);
	} else if (mathSymbol === `/`){
		console.log(num1 / num2);
	} else if (mathSymbol === `*`){
		console.log(num1 * num2);
	} else if (mathSymbol === `sr`) {
		console.log(Math.sqrt(num1));
	} else if (mathSymbol === `**`) {
		console.log(num1 ** 2);
	} else if (mathSymbol === `cube`) {
		console.log(num1 ** 3);
	} else if (mathSymbol === `pwr`) {
		console.log(num1 ** num2);
	} else if (mathSymbol === `rem`) {
		console.log(num1 % num2);
	} else {
		console.log(`That is not a proper formula! Please use +, -, /, *, sr(square root), ** (squared), cube (cubed), pwr (to the power of), or rem (for ramainder)`);
	}
	


	// This line closes the connection to the command line interface.
	reader.close()

});


//


