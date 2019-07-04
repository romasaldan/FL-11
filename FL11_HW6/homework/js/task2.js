let a = +prompt('enter a',0);
if (Number.isNaN(a)) {
	console.log('You have not entered number for a');
} else if (a<0) {
	console.log('length of side a must be positive');
}
let b = +prompt('enter b',0); 
if (Number.isNaN(b)) {
	console.log('You have not entered number for b')
} else if (b<0) {
	console.log('length of side b must be positive');
}

let c = +prompt('enter c',0); 
if (Number.isNaN(c)) {
	console.log('You have not entered number for c')
} else if (c<0) {
	console.log('length of side c must be positive');
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
	switch (amountOfEqualSides) {
		case AMOUNT_OF_EQUAL_SIDES_IN_NORMAL_TRIANGLE:
			console.log('Normal triangle');
			break;
		case AMOUNT_OF_EQUAL_SIDES_IN_ISOSCELES_TRIANGLE:	
			console.log('Isosceles triangle');
			break;
		case AMOUNT_OF_EQUAL_SIDES_IN_EQUIVALENT_TRIANGLE: 
			console.log('Eequivalent triangle');
			break;
		default:	
	}	
} else {
	console.log('Triangle doesn’t exist');
}
