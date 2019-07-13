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
function canConvertToDate(string) {
//	I suppose input string will be entered in format YYYY-MM-DDTHH:MM:SS and every value is not negative
	let date = string.slice(0,string.indexOf('T')).split('-');
	let time = string.slice(string.indexOf('T')+1).split(':');
	for (let i = 0;i<date.length;i++) {
		date[i] = parseInt(date[i]);
	}
	for (let i = 0;i<time.length;i++) {
		time[i] = parseInt(time[i]);
	}
	let year = date[0];
	let month = date[1];
	let day = date[date.length-1];
	let hours = time[0];
	let minutes = time[1];
	let seconds = time[time.length-1];
//  there are lengths of monthes. I set reduced names because eslint require length of lines no more than 120. For instance L_JAN - length of January
	const L_JAN = 31;
	const L_FEB = 28;
	const L_MAR = 31;
	const L_APR = 30;
	const L_MAY = 31;
	const L_JUN = 30;
	const L_JUL = 31;
	const L_AUG = 31;
	const L_SEP = 30;
	const L_OCT = 31;
	const L_NOV = 30;
	const L_DEC = 31;
	const MAX_MONTHES_YEAR =12; 
	const MAX_HOURS_DAY = 24; 
	const MAX_MINUTES_HOUR = 60; 
	const MAX_SECONDS_MINUTE = 60; 
	const FEBRUARY_LEAP_YEAR = 29;
	const LENGTH_OF_MONTHES = [L_JAN,L_FEB,L_MAR,L_APR,L_MAY,L_JUN,L_JUL,L_AUG,L_SEP,L_OCT,L_NOV,L_DEC];
	if (month>MAX_MONTHES_YEAR||hours>MAX_HOURS_DAY-1||minutes>MAX_MINUTES_HOUR-1||seconds>MAX_SECONDS_MINUTE-1) {
		return false;
	}
// Checking condition when year is leap year and date is 29.02
	const SEQUENCE_NUMBER_OF_FEBRUARY=2;
	const FREQUENCY_OF_LEAP_YEARS = 4;
	if (year%FREQUENCY_OF_LEAP_YEARS===0&&month===SEQUENCE_NUMBER_OF_FEBRUARY&&day===FEBRUARY_LEAP_YEAR) {
		return true;
	}
// checkin condition length of a month for each month separated. Year is not leap year.	
	for (let i=0;i<LENGTH_OF_MONTHES.length;i++) {
		if (month-1===i&&day>LENGTH_OF_MONTHES[i]) {
			return false;
		}
	}
	return true;
// below is second way to write the function. But it does not work correrctly. For example 29.02.2017 is valid data	
//	let date = new Date(str)
//	console.log(date)
//	return !(date.toString()==='Invalid Date');
}
console.log(canConvertToDate('2017-02-29T00:00:00'));
console.log(canConvertToDate('2016-05-31T00:00:00'));
//7
function daysBetween(date1,date2) {
	let diffTime = Math.abs(date2.getTime()-date1.getTime());
	const MILISECONDS_IN_SECOND = 1000;
	const SECONDS_IN_MINUTE = 60;
	const MINUTES_IN_HOUR = 60;
	const HOURS_IN_DAY = 24;
	const DOWN_LIMIT_OF_ROUND_TO_UP = 0.5;
	// calculate ceil value of diffDays. we may not use Math.ceil only Math.round()
	let diffDays = diffTime/(MILISECONDS_IN_SECOND*SECONDS_IN_MINUTE*MINUTES_IN_HOUR*HOURS_IN_DAY);
	diffDays = Math.round(diffDays)-diffDays>=DOWN_LIMIT_OF_ROUND_TO_UP ? Math.round(diffDays)-1 : Math.round(diffDays);
	return diffDays;
}
console.log(daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00')));  
//8
function getAmountOfAdultPeople (arrOfPeople) {
	let today = new Date();
	let arrayOfBirthdays = []; 
	const LIMIT_YEARS =18;
	function criterion(el) {
		return el>LIMIT_YEARS;
	}
	for (let i =0;i<arrOfPeople.length;i++) {
		let birthdayOfPerson = new Date(arrOfPeople[i][' birthday ']);		
		let diffDays = daysBetween(today,birthdayOfPerson);
		const DAY_IN_YEAR = 365;	
		arrayOfBirthdays[i] = diffDays/DAY_IN_YEAR;
		// calculate ceil value of arrayOfBirthdays[i]. we may not use Math.ceil only Math.round()
		const DOWN_LIMIT_OF_ROUND_TO_UP = 0.5;
		if (arrayOfBirthdays[i]-Math.round(arrayOfBirthdays[i])>=DOWN_LIMIT_OF_ROUND_TO_UP) {
			arrayOfBirthdays[i]=Math.round(arrayOfBirthdays[i])-1;
		} else {
			arrayOfBirthdays[i]=Math.round(arrayOfBirthdays[i]);
		}
	}
	let amountOfPeopleWhoAreOver18 = filterArray(arrayOfBirthdays,criterion).length;
	return amountOfPeopleWhoAreOver18;
}
const ARRAY_OF_PEOPLE = [
  {
    '_id': '5b5e3168c6bf40f2c1235cd6',
    'index': 0,
    ' birthday ': '2016-03-18T00:00:00',
    'eyeColor': 'green',
    'name': 'Stein',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e3168e328c0d72e4f27d8',
    'index': 1,
    ' birthday ': '1991-02-11T00:00:00',
    'eyeColor': 'blue',
    'name': 'Cortez',
    'favoriteFruit': 'strawberry'
  },
  {
    '_id': '5b5e3168cc79132b631c666a',
    'index': 2,
    ' birthday ': '1984-04-17T00:00:00',
    'eyeColor': 'blue',
    'name': 'Suzette',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e31682093adcc6cd0dde5',
    'index': 3,
    ' birthday ': '1994-04-17T00:00:00',
    'eyeColor': 'green',
    'name': 'George',
    'favoriteFruit': 'banana'
  }
];
console.log(getAmountOfAdultPeople(ARRAY_OF_PEOPLE))
//9
function keys(obj) {
	let arrayOfKeys = [];
	let count = 0;
	for (let prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			arrayOfKeys[count] = prop;
			count++;
		}
	}
	return arrayOfKeys;
}
console.log(keys({keyOne: 1, keyTwo: 2, keyThree: 3}))
//10
function values (obj) {
	let arrayOfKeys = [];
	let count = 0;
	for (let prop in obj) {
		if (obj.hasOwnProperty(prop)) {		
			arrayOfKeys[count]=obj[prop];
			count++;
		}
	}
	return arrayOfKeys;
}
console.log(values({keyOne: 1, keyTwo: 2, keyThree: 3}))