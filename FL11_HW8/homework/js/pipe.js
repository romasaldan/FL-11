function addOne(x) {
	return x+1;
}
function divideIntoTwo(x) {
	return x/2;
}
function multiplyThree(x) {
	return 3*x;
}
function pipe() {
	let value = arguments[0];
	for (let i=1;i<arguments.length;i++) {
		value = arguments[i](value); 
	}
	return value;
}
console.log(pipe(3,addOne,divideIntoTwo,multiplyThree))
