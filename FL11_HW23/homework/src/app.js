class User {
	constructor (name ,orderTotalPrice, weekendDiscount, nightDiscount, bonus) {
		this.name = name;
		this.orderTotalPrice = orderTotalPrice || 0;
		this.weekendDiscount = weekendDiscount || 0;
		this.nightDiscount = nightDiscount || 0;
		this.bonus = bonus || 0;
	}
	makeOrder() {
		const amount_of_percent = 100;
		let totalDiscount = (this.weekendDiscount+this.nightDiscount)/amount_of_percent;
		let orderTotalPriceAfterDiscount = this.orderTotalPrice-this.orderTotalPrice*totalDiscount - this.bonus; 
		return `Price after discount and including bonuses is ${orderTotalPriceAfterDiscount}`
	}
}
function getDiscount(user) {
	let date = new Date();
	let satursday = 6;
	let weekendDiscount = 5;
	let nightDiscount = 10;
	const lateHour = 23;
	const earlyHour = 6;
	if (date.getDay()===0 || date.getDay()===satursday) {
		user.weekendDiscount = weekendDiscount;
	}
	if (date.getHours()>=lateHour || date.getHours()<=earlyHour) {
		user.nightDiscount = nightDiscount;
	}
}
function setBonus(user) {
	let amountOfHundreds = parseInt(user.orderTotalPrice/100)
	let bonusForOneHundred = 5;
	user.bonus = bonusForOneHundred*amountOfHundreds;
}

const user = new User('djon',205);
getDiscount(user)
setBonus(user)
console.log(user.makeOrder())