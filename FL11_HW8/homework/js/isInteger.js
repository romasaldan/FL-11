function isInteger (a) {
	if (typeof a!== 'number') {
		return false;		   
	}
	return a%1===0;
}
console.log(isInteger(-2.01));
console.log(isInteger(0));
console.log(isInteger(2));
