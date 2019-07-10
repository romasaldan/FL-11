function reverseNumber(a) {
	let reverse = 0;
	const DIVIDER = 10;
	let helpVariable = a;
	let isNegative = false;
	if (a<0) {
		isNegative = true;
		helpVariable = -a;
	}
	do {
		let number = helpVariable%DIVIDER;
		reverse=reverse*10+number;
		helpVariable = (helpVariable-number)/DIVIDER;
	} while (helpVariable>0)
	if (isNegative) {
		return -reverse;
	} else {
		return reverse;
	}
}
console.log(reverseNumber(4321));