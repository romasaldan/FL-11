function getMin() {	
	let min = arguments[0];
	// I  did not convert arguments, boolean and string variable will be converted to numbers
	for(let i=0;i<arguments.length;i++) {
		if (arguments[i]<min) {
			min = arguments[i];
		}
	}
	return min;
}
console.log(getMin(1,2,3,-1,5,8,0))
