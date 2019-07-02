let a= +prompt('enter a',0);
let b= +prompt('enter b',0); 
let c= +prompt('enter c',0); 
let aCondition = a>0;
let bCondition = b>0;
let cCondition = c>0;
let abCondition = a+b>c;
let acCondition = a+c>b;
let bcCondition = c+b>a;
if (!(abCondition&&acCondition&&bcCondition&&aCondition&&bCondition&&cCondition)) {
	console.log('Triangle doesn’t exist');
} else {
	let amountOfEqualSides = 0;
	if (a===b) {
		amountOfEqualSides++;
	}
	if (a===c) {
		amountOfEqualSides++;
	}
	if (b===c) {
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
}
