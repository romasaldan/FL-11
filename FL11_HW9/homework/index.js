//1
function getNumbers(string) {
	let arrayOfNumbers = [];
	let counterOfNumbers = 0;
	for (let i=0; i<string.length; i++) {
		let symbolOfString = parseInt(string[i]);
		if (!isNaN(symbolOfString)) {
			arrayOfNumbers[counterOfNumbers] = symbolOfString;
			counterOfNumbers++;
		}		
	}
	return arrayOfNumbers;
}
console.log(getNumbers('n1um3ber95'));
//1
//2
function findTypes() {
	let counterOfTypes = {};
	for (let i = 0;i<arguments.length;i++) {
		let typeOfParameter = typeof arguments[i];
		if (counterOfTypes.hasOwnProperty(typeOfParameter)) {
			counterOfTypes[typeOfParameter] +=1;  
		} else {
			counterOfTypes[typeOfParameter] = 1;
		}
	}
	return counterOfTypes;
}
console.log(findTypes(null,1,'hello',1,'5')); 