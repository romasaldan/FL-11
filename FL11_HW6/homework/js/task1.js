let a1 = +prompt('enter a1',0);
if (Number.isNaN(a1)) {
	console.log('you have not entered numeric values for a1. Refresh the page and start again.');
}
let a2 = +prompt('enter a2',0); 
if (Number.isNaN(a2)) {
	console.log('you have not entered numeric values for a2. Refresh the page and start again..');
}
let b1 = +prompt('enter b1',0); 
if (Number.isNaN(b1)) {
	console.log('you have not entered numeric values for b1. Refresh the page and start again..');
}
let b2 = +prompt('enter b2',0); 
if (Number.isNaN(b2)) {
	console.log('you have not entered numeric values for b2. Refresh the page and start again..');
}
let c1 = +prompt('enter c1',0); 
if (Number.isNaN(c1)) {
	console.log('you have not entered numeric values for c1. Refresh the page and start again..');
}
let c2 = +prompt('enter c2',0); 
if (Number.isNaN(c2)) {
	console.log('you have not entered numeric values for c2. Refresh the page and start again.');
}
const numberOfPoint = 2;
if ((a1+b1)/numberOfPoint===c1&&(a2+b2)/numberOfPoint===c2) {
	console.log(true);
} else {
	console.log(false);
}