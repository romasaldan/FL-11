function addOne(x) {
	return x+1;
}
function pipe() {
	let value = arguments[0];
	for (let i=1;i<arguments.length;i++) {
		value = arguments[i](value); 
	}
	return value;
}
console.log(pipe(3,addOne,addOne,addOne,addOne,addOne));
