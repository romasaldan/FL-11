function inherit(object,proto) {
	if(typeof object==='function'&&typeof proto === 'function') {
		object.prototype = Object.create(proto.prototype);
		object.prototype.constructor = object;
	} else {
		console.log('object and proto should be constuctor');
	}
}
function Pokemon (type,canFly,specie) {
	this._type = type;
	if(typeof canFly ==='boolean') {
		this._canFly = canFly;	
	} else {
		console.log('canFly parameter must be boolean type')
	}
	this._specie = specie;
	this._attacks = {
		standartAttack:10
	}
	//every pokemon can study new attacks
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
	if(typeof attack === 'object') {
		assign(this._attacks,attack)
	} else {
		console.log('attack must be object with name of properties which are names of attack and value of properties which are probability of hit')
	}
}
Pokemon.prototype.attack = function(pokemon,choosenAttack) {
	// choosen attack is key of _attacks object
	const AMOUNT_OF_PERCENT = 100;
	// attack is succesfull when the attacker shoots and the defender does not sidestep from attack
	if (typeof choosenAttack ==='undefined') {
		choosenAttack = 'standartAttack';
	}
	let probabilityOfSucces = this._attacks[choosenAttack]/AMOUNT_OF_PERCENT*(AMOUNT_OF_PERCENT-pokemon.getDefence())/AMOUNT_OF_PERCENT;
	console.log(probabilityOfSucces)
	if(Math.random()<probabilityOfSucces) {
		console.log('attack is succesful. '+this.getPokemonType()+' won '+pokemon.getPokemonType()+'.')
	} else {
		console.log('attack is not succesful')
	}
}
function Charmander() {
	Pokemon.call(this,'Fire',false,'Lizard Pokémon');
	this._level = 1;
	assign(this._attacks,{fireAttack:30})
}
inherit(Charmander,Pokemon)
Charmander.prototype.getDefence = function() {
	const START_CHARMANDER_DEFENCE = 20;
	return START_CHARMANDER_DEFENCE*this._level;
}
Charmander.prototype.evolve = function () {
	return new Charmeleon(this._attacks)
}
function Charmeleon(studiedAttacks) {
	Charmander.call(this);
	this._specie = 'Flame Pokémon';
	this._level = 2;
	assign(this._attacks,studiedAttacks);
}
inherit(Charmeleon,Charmander)
Charmeleon.prototype.evolve = function () {
	return new Charizard(this._attacks)
}
function Charizard(studiedAttacks) {
	Charmeleon.call(this);
	this._canFly = true;
	this._level = 3;
	assign(this._attacks,studiedAttacks);
}
inherit(Charizard,Charmeleon)
Charizard.prototype.evolve = function() {
	return this;
}
function Pichu() {
	Pokemon.call(this,'Electric',false,'Mouse Pokémon')
	this._level = 1;
	assign(this._attacks,{electricAttack:40})
}
inherit(Pichu,Pokemon)
Pichu.prototype.getDefence = function () {
	const START_DEFENCE_OF_PICHU =15;
	return START_DEFENCE_OF_PICHU*this._level;
}
Pichu.prototype.evolve = function () {
	return new Pikachu(studiedAttacks)
}
function Pikachu(studiedAttacks) {
	Pichu.call(this)
	this._level = 2;
	assign(this._attacks,studiedAttacks)
}
inherit(Pikachu,Pichu)
Pikachu.prototype.evolve = function () {
	return new Raichu(studiedAttacks)
}
function Raichu(studiedAttacks) {
	Pikachu.call(this)
	this._level = 3;
	assign(this._attacks,studiedAttacks)
}
inherit(Raichu,Pikachu)
Raichu.prototype.evolve = function () {
	return this
}
const cha = new Charmander()
cha.studyAttack({fireHit:35})
console.log(cha)
const charme = cha.evolve()
console.log(charme)
const charme2 = new Charmeleon()
console.log(charme2)