//№1
function maxElement(...rest) {
	return Math.max.apply(null,rest[0])
}
console.log(maxElement([1,4,3,2,5]))
//№2
function copyArray(array) {
	return Array.from(array);
}
const arr = [2,3,4]
console.log(copyArray(arr) === arr)

const s = Symbol('ff')
const s1 = Symbol('ff')
const huj = {
	v:3
}
//№3
let addUniqueId = (function() {
	let counter = 0;
	return function (object) {
		const newObj = {}
		Object.assign(newObj,object)
		let id = Symbol('id')
		newObj[id] = counter;
		counter++
		return newObj;
	}
})()
const huj1 = addUniqueId(huj)
console.log(huj1)
console.log(huj)
//№4





//№5
function findUniqueElements(array) {
	let set = new Set(array)
	return Array.from(set)
}
console.log(findUniqueElements([1,2,3,4,5,0,2,3,4,5,2,1,3,4,5]))
//№6
function hideNumber(number) {
	let helpStr = number.slice(number.length-4)
	return helpStr.padStart(number.length,'*');
}
console.log(hideNumber('1234567890'))
//№7
function add(a=(()=>{throw Error('Missing property as required')})(),b=(()=>{throw Error('Missing property as required')})()) {
	return a+b
}
console.log(add(2,3))