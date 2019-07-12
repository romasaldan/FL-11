//0
function getNumbers(string) {
	let arrayOfNumbers = [];
	let counterOfNumbers = 0;
	for (let i=0; i<string.length; i++) {
		let symbolOfString = parseInt(string[i]);
		if (!isNaN(symbolOfString)) {
			arrayOfNumbers[counterOfNumbers] = symbolOfString;
			counterOfNumbers++;
		}		
	}
	return arrayOfNumbers;
}
console.log(getNumbers('n1um3ber95'));
//1
function findTypes() {
	let counterOfTypes = {};
	for (let i = 0;i<arguments.length;i++) {
		let typeOfParameter = typeof arguments[i];
		if (counterOfTypes.hasOwnProperty(typeOfParameter)) {
			counterOfTypes[typeOfParameter] +=1;  
		} else {
			counterOfTypes[typeOfParameter] = 1;
		}
	}
	return counterOfTypes;
}
console.log(findTypes(null,1,'hello',1,'5',true)); 
//2
function executeforEach(array,functionForExecuting) {
	for (let i = 0;i<array.length;i++) {
		functionForExecuting(array[i]);	
	}
}
executeforEach([0,1,1], function(el) {
	console.log(el) 
}); 
//3
function mapArray(array,functionForExecuting) {
	let newArray =[]; 
	executeforEach(array,function(el) {
		newArray.push(functionForExecuting(el))
	})
	return newArray;
}
console.log(mapArray([0, 1, 1], function(el) {
	return el + 1; 
})) 
//4
function filterArray(array,functionForExecuting) {
	let newArray = [];
	executeforEach(array,function(el) {
		if (functionForExecuting(el)) {
			newArray.push(el);
		}
	})
	return newArray;	
}
console.log(filterArray([0, 1, 0, 1], function(el) { 
	return el > 0; 
}))
//5
function showFormattedDate(date) {
	const LIST_OF_MONTH = ['Jan','Feb','Mar','Apr','Mai','Jun','Jul','Aug','Sep','Oct','Now','Dec'];
	let day = date.getDate();
	let month = date.getMonth();
	let year = date.getFullYear();
	return `Date: ${LIST_OF_MONTH[month]} ${day} ${year}`
}
console.log(showFormattedDate(new Date('2019-01-27T01:10:00')))
console.log(showFormattedDate(new Date()))
//6/
function canConvertToDate(str) {
//	I suppose input string will be entered in format YYYY-MM-DDTHH:MM:SS and every value is not negative
//	const POSITION_OF_DIVIDERS = [4,7,10,13,16,19];
//	let year = parseInt(string.slice(0,POSITION_OF_DIVIDERS[0]));
//	let month = parseInt(string.slice(POSITION_OF_DIVIDERS[0]+1,POSITION_OF_DIVIDERS[1]));
//	let day = parseInt(string.slice(POSITION_OF_DIVIDERS[1]+1,POSITION_OF_DIVIDERS[2]));
//	let hours = parseInt(string.slice(POSITION_OF_DIVIDERS[2]+1,POSITION_OF_DIVIDERS[3]));
//	let minutes = parseInt(string.slice(POSITION_OF_DIVIDERS[3]+1,POSITION_OF_DIVIDERS[4]));
//	let seconds = parseInt(string.slice(POSITION_OF_DIVIDERS[4]+1,POSITION_OF_DIVIDERS[5]));
//	const MAX_MONTHES_YEAR =12; 
//	const MAX_HOURS_DAY = 24; 
//	const MAX_MINUTES_HOUR = 60; 
//	const MAX_SECONDS_MINUTE = 60; 
//	const FEBRUARY_LEAP_YEAR = 29;
//	const LENGTH_OF_MONTHES = [31,28,31,30,31,30,31,31,30,31,30,31];
//	if (month>MAX_MONTHES_YEAR-1||hours>MAX_HOURS_DAY-1||minutes>MAX_MINUTES_HOUR-1||seconds>MAX_SECONDS_MINUTE-1) {
//		return false;
//	}
//	if (year%4===0&&month===2&&day===FEBRUARY_LEAP_YEAR) {
//		return true;
//	}
//	for (let i=0;i<LENGTH_OF_MONTHES.length;i++) {
//		if (month-1===i&&day>LENGTH_OF_MONTHES[i]) {
//			return false;
//		}
//	}
//	return true;
	let date = new Date(str)
	console.log(date)
	return !(date.toString()==='Invalid Date');
}

console.log(canConvertToDate('2016-13-18T00:00:00'))
console.log(canConvertToDate('2016-03-18T00:00:00'))

//7
function daysBetween(date1,date2) {
	let diffTime = Math.abs(date2.getTime()-date1.getTime());
	const MILISECONDS_IN_SECOND = 1000;
	const SECONDS_IN_MINUTE = 60;
	const MINUTES_IN_HOUR = 60;
	const HOURS_IN_DAY = 24;
	let diffDays = Math.ceil(diffTime/(MILISECONDS_IN_SECOND*SECONDS_IN_MINUTE*MINUTES_IN_HOUR*HOURS_IN_DAY));
	return diffDays;
}
console.log(daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00')));  
//8
function getAmountOfAdultPeople (arrOfPeople) {
	let today = new Date();
	let amountOfPeopleWhoAreOver18 = 0; 
	for (let i =0;i<arrOfPeople.length;i++) {
		let birthdayOfPerson = new Date(arrOfPeople[i][' birthday ']);		
		let diffDays = daysBetween(today,birthdayOfPerson);
		if (diffDays/365>18) {
			amountOfPeopleWhoAreOver18++;
		}
	}
	return amountOfPeopleWhoAreOver18;
}
const ARRAY_OF_PEOPLE = [
  {
    "_id": "5b5e3168c6bf40f2c1235cd6",
    "index": 0,
    " birthday ": '2016-03-18T00:00:00',
    "eyeColor": "green",
    "name": "Stein",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e3168e328c0d72e4f27d8",
    "index": 1,
    " birthday ": '1991-02-11T00:00:00',
    "eyeColor": "blue",
    "name": "Cortez",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5b5e3168cc79132b631c666a",
    "index": 2,
    " birthday ": '1984-04-17T00:00:00',
    "eyeColor": "blue",
    "name": "Suzette",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e31682093adcc6cd0dde5",
    "index": 3,
    " birthday ": '1994-04-17T00:00:00',
    "eyeColor": "green",
    "name": "George",
    "favoriteFruit": "banana"
  }
];
console.log(getAmountOfAdultPeople(ARRAY_OF_PEOPLE))
//9