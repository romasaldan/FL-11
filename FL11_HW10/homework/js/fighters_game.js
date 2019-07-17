function Fighter(object) {
	let fighter = {};
	let wins = 0;
	let losses = 0;
	fighter.name = object.name;
	fighter.damage = object.damage;
	fighter.hp = object.hp;
	fighter.agility = object.agility;
	this.setName = function (name) {
		fighter.name = name;
	}
	this.addWin = function () {
		wins++;
	}
	this.addLose = function() {
		losses++;
	}
	
	this.logCombatHistory = function () {
		console.log('Name: '+this.getName()+', Wins: '+wins+', Losses: '+losses);		
	}
	this.setDamage = function(damage) {
		fighter.damage = damage;
	}
	this.setAgility = function(agility) {
		fighter.agility = agility;
	}
	this.setHealth = function(hp) {
		const MAX_AMOUNT_OF_HEALTH = 100; 
		const MIN_AMOUNT_OF_HEALTH = 0; 
		if (hp>MAX_AMOUNT_OF_HEALTH) {
			fighter.hp = MAX_AMOUNT_OF_HEALTH;
		} else if (hp<MIN_AMOUNT_OF_HEALTH) {
			fighter.hp = MIN_AMOUNT_OF_HEALTH;
		} else {
			fighter.hp = hp;
		}
	}
	this.setDamage = function(damage) {
		fighter.damage = damage;
	}
	this.isAlive = function () {
		if (this.getHealth()!==0) {
			return true;
		} else {
			return false;
		}
	}
	this.getName = function () {
		return fighter.name;
	}
	this.getDamage = function () {
		return fighter.damage;
	}
	this.getAgility = function () {
		return fighter.agility;
	}
	this.getHealth = function () {
		return fighter.hp;
	}
}
Fighter.prototype.dealDamage = function (damage) {
	this.setHealth(this.getHealth()-damage);
}
Fighter.prototype.heal = function (amountOfHP) {
	this.setHealth(this.getHealth()+amountOfHP);
}
Fighter.prototype.attack = function (fighter) {
	const PERCENTS = 100;
	let probabilityOfSucsess = 1-fighter.getAgility()/PERCENTS;
	if (fighter.getHealth()===0) {
		console.log(fighter.getName()+' is Dead.');
		console.log('battle was not happened')
		return;
	}
	if (probabilityOfSucsess>Math.random()) {
		fighter.dealDamage(this.getDamage());
		console.log(this.getName()+' make '+this.getDamage()+' damage to '+fighter.getName());
	} else {
		console.log(this.getName()+' attack missed')
	}
}
function battle(fighter1,fighter2) {
	do {
		fighter1.attack(fighter2);
		if(!fighter2.isAlive()) {
			fighter1.addWin()
			fighter2.addLose()
			return;
		}
		fighter2.attack(fighter1);
		if(!fighter1.isAlive()) {
			fighter2.addWin()
			fighter1.addLose()
			return;
		}
	} while (fighter1.isAlive()&&fighter1.isAlive())
}
let obj = {
	name: 'John', 
	damage: 20, 
	hp: 100,
	agility: 25
}
let obj2 = {
	name: 'Jack', 
	damage: 25, 
	hp: 100,
	agility: 20
};
const john = new Fighter(obj); 
const jack = new Fighter(obj2);
battle(john,jack)

john.logCombatHistory()
jack.logCombatHistory()