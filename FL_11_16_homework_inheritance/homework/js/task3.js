function inherit(object,proto) {
	if(typeof object==='function'&&typeof proto === 'function') {
		object.prototype = Object.create(proto.prototype);
		object.prototype.constructor = object;
	} else {
		console.log('object and proto should be constuctor');
		return
	}
}
function Pokemon (type,canFly,specie) {
	this._type = type;
	if(typeof canFly ==='boolean') {
		this._canFly = canFly;	
	} else {
		console.log('canFly parameter must be boolean type')
		return
	}
	this._specie = specie;
}
Pokemon.prototype.getType = function() {
	return this._type;
}
Pokemon.prototype.getSpecie = function() {
	return this._specie;
}
Pokemon.prototype.canfly = function() {
	return this._canFly;
}
Pokemon.prototype.getPokemonType = function () {
	return this.constructor.name;
}
function Charmander() {
	Pokemon.call(this,'Fire',false,'Lizard Pokémon');
}
inherit(Charmander,Pokemon)
Charmander.prototype.evolve = function () {
	return new Charmeleon()
}
function Charmeleon() {
	Charmander.call(this);
	this._specie = 'Flame Pokémon';
}
inherit(Charmeleon,Charmander)
Charmeleon.prototype.evolve = function () {
	return new Charizard()
}
function Charizard() {
	Charmeleon.call(this);
	this._canFly = true;
}
inherit(Charizard,Charmeleon)
Charizard.prototype.evolve = function() {
	return this;
}
function Pichu() {
	Pokemon.call(this,'Electric',false,'Mouse Pokémon')
}
inherit(Pichu,Pokemon)
Pichu.prototype.evolve = function () {
	return new Pikachu()
}
function Pikachu() {
	Pichu.call(this)
}
inherit(Pikachu,Pichu)
Pikachu.prototype.evolve = function () {
	return new Raichu()
}
function Raichu() {
	Pikachu.call(this)
}
inherit(Raichu,Pikachu)
Raichu.prototype.evolve = function () {
	return this
}
const pok = new Raichu()
console.log(pok)