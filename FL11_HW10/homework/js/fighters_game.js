function Fighter(object) {
	let fighter = {};
	let wins = 0;
	let losses = 0;
	function setHealth(hp) {
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
	function setAgility(agility) {
		const MAX_AMOUNT_OF_AGILITY = 100; 
		const MIN_AMOUNT_OF_AGILITY = 0; 
		if (agility>MAX_AMOUNT_OF_AGILITY) {
			fighter.agility = MAX_AMOUNT_OF_AGILITY;
		} else if (agility<MIN_AMOUNT_OF_AGILITY) {
			fighter.agility = MIN_AMOUNT_OF_AGILITY;
		} else {
			fighter.agility = agility;
		}		
	}
	function setDamage(damage) {
		if (damage>0) {
			fighter.damage = damage;
		} else {
			fighter.damage = 0;
		}	
	}
	fighter.name = object.name;
	setDamage(object.damage);
	setHealth(object.hp);
	setAgility(object.agility);	
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
	this.addWin = function () {
		wins++;
	}
	this.addLose = function() {
		losses++;
	}
	this.logCombatHistory = function () {
		console.log('Name: '+this.getName()+', Wins: '+wins+', Losses: '+losses);		
	}
	this.dealDamage = function (damage) {
		setHealth(this.getHealth()-damage);
	}
	this.heal = function (amountOfHP) {
		setHealth(this.getHealth()+amountOfHP);
	}
	this.attack = function (fighter) {
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
}
function battle(fighter1,fighter2) {
	if (fighter1.getHealth()===0||fighter2.getHealth()===0) {
		console.log('battle can not occur because at least one of fighters are dead');
		return;
	}
	do {
		fighter1.attack(fighter2);
		if(fighter2.getHealth()===0) {
			fighter1.addWin()
			fighter2.addLose()
			return;
		}
		fighter2.attack(fighter1);
		if(fighter1.getHealth()===0) {
			fighter2.addWin()
			fighter1.addLose()
			return;
		}
	} while (fighter1.getHealth()!==0&&fighter2.getHealth()!==0)
}
const obj = {
	name: 'John', 
	damage: 20, 
	hp: 100,
	agility: 25
}
const obj2 = {
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