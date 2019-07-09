function formatTime(a) {
	const amountOfMinutesInHour = 60;
	const amountOfHoursInDay = 24;
	let days = Math.floor(a/(amountOfHoursInDay*amountOfMinutesInHour))
	let minutesWithoutDays = a - days*amountOfHoursInDay*amountOfMinutesInHour;
	let hours = Math.floor(minutesWithoutDays/amountOfMinutesInHour);
	let minutes = minutesWithoutDays - hours*amountOfMinutesInHour;
	return days+' day(s) '+hours+' hour(s) '+minutes+'minute(s).'
}
console.log(formatTime(2000))