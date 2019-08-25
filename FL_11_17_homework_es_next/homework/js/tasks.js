//№1
function maxElement(...rest) {
	if (rest[0] instanceof Array) {
		return Math.max.apply(null,rest[0])
	} else {
		throw Error('parameter should be array')
	}	
}
console.log(maxElement([1,4,3,2,5]))
//№2
function copyArray(array) {
	return [...array];
}
const arr = [2,3,4]
console.log(copyArray(arr) === arr)
//№3
const objWithoutID = {
	somePropetties:3
}
let addUniqueId = (()=> {
	let counter = 0;
	return function (object) {
		const newObj = {}
		Object.assign(newObj,object)
		newObj[Symbol('id')] = counter;
		counter++
		return newObj;
	}
})()
const objWithID = addUniqueId(objWithoutID)
console.log(objWithID)
console.log(objWithoutID)
//№4
const oldObject = {
	name: 'Someone',
	details: {
		id: 1,
		age: 11,
		university: 'UNI'
	}
}
function reGroupObject(obj) {
	let {name} = obj
	let {id,age,university} = obj.details;
	const newObj = {
		university,
		user: {
			age,
			firstName: name,
			id
		}
	}
	return newObj
}
console.log(reGroupObject(oldObject))
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
//№8
function getNames() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => data.json())
    .then(array => {
        const arrayOfNames = [];
        array.forEach(element => {
            arrayOfNames.push(element.name)
        });
        arrayOfNames.sort()
        arrayOfNames.forEach(element => {
            console.log(element)
        });
    })
    .catch(error=>console.log(error))
}
getNames()

// №9
async function rewrittenGetNames () {
    try {
        const users = (async ()=>{
            const request = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await request.json()
            const arrayOfNames = [];
            data.forEach(element => {
                arrayOfNames.push(element.name)
            });
            arrayOfNames.sort()
            arrayOfNames.forEach(element => {
                console.log(element)
            });
            })()            
    } catch (error) {
        console.log(error)
    }
}  
rewrittenGetNames()