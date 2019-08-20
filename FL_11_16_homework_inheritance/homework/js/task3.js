function inherit(object,proto) {
	if(typeof object==='function'&&typeof proto === 'function') {
		object.prototype = Object.create(proto.prototype);
		object.prototype.constructor = object;
	} else {
		throw Error('object and proto should be constuctors');
	}
}
function Pokemon(type,canFly,specie) {
	this._type = type;
	if(typeof canFly === 'boolean') {
		this._canFly = canFly;	
	} else {
		throw Error('canFly parameter must be boolean type')
	}
	this._specie = specie;
	this._attacks = {
		standartAttack:10
	}
	//every pokemon can study new attacks. 
}
Pokemon.prototype.getType = function() {
	return this._type;
}
Pokemon.prototype.getSpecie = function() {
	return this._specie;
}
Pokemon.prototype.canFly = function() {
	return this._canFly;
}
Pokemon.prototype.getPokemonType = function () {
	return this.constructor.name;
}
Pokemon.prototype.studyAttack = function (attack) {
	// we can add object which contains many new types of attack
	if(typeof attack === 'object') {
		// I use Object.assign instead of my own assign from task1 because eslint requires that assign must be defined in task3.js
		Object.assign(this._attacks,attack)
	} else {
		throw Error('attack must be object in the form "attack:value" pairs')
	}
}
Pokemon.prototype.attack = function(pokemon,choosenAttack='standartAttack') {
	// choosen attack is key of _attacks object
	const AMOUNT_OF_PERCENTS = 100;
	let probabilityOfHit
	// attack is succesfull when the attacker shoots and the defender does not sidestep from attack. We must multiply these two probabilities
	if (typeof this._attacks[choosenAttack] !== 'undefined') {
		probabilityOfHit = this._attacks[choosenAttack]/AMOUNT_OF_PERCENTS;
	} else {
		probabilityOfHit = this._attacks.standartAttack/AMOUNT_OF_PERCENTS;
	}
	
	let probabilityOfDodging = (AMOUNT_OF_PERCENTS-pokemon.getDefence())/AMOUNT_OF_PERCENTS;
	let probabilityOfSuccess = probabilityOfHit*probabilityOfDodging;
	if(Math.random()<probabilityOfSuccess) {
		console.log('attack is successful. '+this.getPokemonType()+' beat '+pokemon.getPokemonType()+'.')
	} else {
		console.log('attack is not successful')
	}
}
// Charmander
function Charmander() {
	Pokemon.call(this,'Fire',false,'Lizard Pokémon');
	this._degreeOfEvolution = 1;
	Object.assign(this._attacks,{fireAttack:30})
}
inherit(Charmander,Pokemon)
Charmander.prototype.getDefence = function() {
	const START_CHARMANDER_DEFENCE = 20;
	return START_CHARMANDER_DEFENCE*this._degreeOfEvolution;
}
Charmander.prototype.evolve = function () {
	return new Charmeleon(this._attacks)
}
// Charmeleon
function Charmeleon(studiedAttacks) {
	Charmander.call(this);
	this._specie = 'Flame Pokémon';
	this._degreeOfEvolution = 2;
	Object.assign(this._attacks,studiedAttacks);
}
inherit(Charmeleon,Charmander)
Charmeleon.prototype.evolve = function () {
	return new Charizard(this._attacks)
}
// Charizard
function Charizard(studiedAttacks) {
	Charmeleon.call(this);
	this._canFly = true;
	this._degreeOfEvolution = 3;
	Object.assign(this._attacks,studiedAttacks);
}
inherit(Charizard,Charmeleon)
Charizard.prototype.evolve = function() {
	return this;
}
// Pichu
function Pichu() {
	Pokemon.call(this,'Electric',false,'Mouse Pokémon')
	this._degreeOfEvolution = 1;
	Object.assign(this._attacks,{electricalAttack:40})
}
inherit(Pichu,Pokemon)
Pichu.prototype.getDefence = function () {
	const START_DEFENCE_OF_PICHU =15;
	return START_DEFENCE_OF_PICHU*this._degreeOfEvolution;
}
Pichu.prototype.evolve = function () {
	return new Pikachu(this._attacks)
}
// Pikachu
function Pikachu(studiedAttacks) {
	Pichu.call(this)
	this._degreeOfEvolution = 2;
	Object.assign(this._attacks,studiedAttacks)
}
inherit(Pikachu,Pichu)
Pikachu.prototype.evolve = function () {
	return new Raichu(this._attacks)
}
// Raichu
function Raichu(studiedAttacks) {
	Pikachu.call(this)
	this._degreeOfEvolution = 3;
	Object.assign(this._attacks,studiedAttacks)
}
inherit(Raichu,Pikachu)
Raichu.prototype.evolve = function () {
	return this
}
const cha = new Charmander()
// created new Charmander
cha.studyAttack({fireHit:35,fireBall:45})
// Charmander studied new types of attack. These types will be available for next generations of evolutions
console.log(cha)
const charme = cha.evolve()
// cha evolved to Charmeleon
console.log(charme)
// as we can se charme have access to fireHit and Fireball because it evolved from cha and cha studied these methods
const charme2 = new Charmeleon()
console.log(charme2)
// charme2 is another Charmeleon.As we expected it doesn't have access to fireHit and Fireball
//charme2.attack(charme,'fireHit') if you use unstudied attack pokemon will use standartAttack
const rai = new Raichu()
// created new Raichu
cha.attack(rai,'fireBall')
//  cha attacked Raichu with applying fireBall
rai.attack(charme2)
//  Raichu attacked cha with applying standartAttack
rai.attack(charme2,'electricalAttack')
//  Raichu attacked cha with applying electricalAttack



