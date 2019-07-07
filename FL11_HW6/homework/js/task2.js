let a = +prompt('enter a',0);
if (isNaN(a)) {
	console.log('You have not entered number for a');
} else if (a<0) {
	console.log('length of side a have to be positive');
}
let b = +prompt('enter b',0); 
if (isNaN(b)) {
	console.log('You have not entered number for b')
} else if (b<0) {
	console.log('length of side b have to be positive');
}
let c = +prompt('enter c',0); 
if (isNaN(c)) {
	console.log('You have not entered number for c')
} else if (c<0) {
	console.log('length of side c have to be positive');
}
if (a>0&&a>0&&c>0&&a+b>c&&a+c>b&&c+b>a) {
	let amountOfEqualSides = 0;
	if(a===b) {
		amountOfEqualSides++;
	}
	if(a===c) {
		amountOfEqualSides++;
	}
	if(b===c) {
		amountOfEqualSides++;
	}
	const AMOUNT_OF_EQUAL_SIDES_IN_NORMAL_TRIANGLE = 0; 
	const AMOUNT_OF_EQUAL_SIDES_IN_ISOSCELES_TRIANGLE = 1;  
	const AMOUNT_OF_EQUAL_SIDES_IN_EQUIVALENT_TRIANGLE = 3;  
	if (amountOfEqualSides===AMOUNT_OF_EQUAL_SIDES_IN_NORMAL_TRIANGLE) {
		console.log('Normal triangle');
	} else if (amountOfEqualSides===AMOUNT_OF_EQUAL_SIDES_IN_ISOSCELES_TRIANGLE) {
		console.log('Isosceles triangle');
	} else if(amountOfEqualSides===AMOUNT_OF_EQUAL_SIDES_IN_EQUIVALENT_TRIANGLE) {
		console.log('Eequivalent triangle');
	}
} else {
	console.log('Triangle doesn’t exist');
}
