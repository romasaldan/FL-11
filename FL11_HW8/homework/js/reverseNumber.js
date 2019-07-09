function reverseNumber(a) {
	let aToString =a+'';
	let reverseString ='';
	for (let i = 0;i<aToString.length;i++) {
		reverseString=aToString[i]+reverseString;
	}
	return parseFloat(reverseString);
}
console.log(reverseNumber(12452));
