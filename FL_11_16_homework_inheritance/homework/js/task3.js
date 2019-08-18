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
Pokemon.prototype.Canfly = function() {
	return this._canFly;
}
Pokemon.prototype.getPokemonType = function () {
	return this.constructor.name;
}
function Charmander() {
	Pokemon.call(this,'Fire',false,'Lizard Pokémon');
}
Charmander.prototype = Object.create(Pokemon.prototype)
Charmander.prototype.constructor = Charmander;
Charmander.prototype.evolve = function () {
	return new Charmeleon()
}
function Charmeleon() {
	Pokemon.call(this,'Fire',false,'Flame Pokémon');
}
Charmeleon.prototype = Object.create(Pokemon.prototype)
Charmeleon.prototype.constructor = Charmeleon;
Charmeleon.prototype.evolve = function () {
	return new Charizard()
}
function Charizard() {
	Pokemon.call(this,'Fire',true,'Flame Pokémon');
}
Charizard.prototype = Object.create(Pokemon.prototype)
Charizard.prototype.constructor = Charizard;
Charizard.prototype.evolve = function() {
	return new Charizard();
}
function Pichu() {
	Pokemon.call(this,'Electric',false,'Mouse Pokémon')
}
Pichu.prototype = Object.create(Pokemon.prototype)
Pichu.prototype.constructor = Pichu;
Pichu.prototype.evolve = function () {
	return new Pikachu()
}
function Pikachu() {
	Pokemon.call(this,'Electric',false,'Mouse Pokémon')
}
Pikachu.prototype = Object.create(Pokemon.prototype)
Pikachu.prototype.constructor = Pikachu;
Pikachu.prototype.evolve = function () {
	return new Raichu()
}
function Raichu() {
	Pokemon.call(this,'Electric',false,'Mouse Pokémon')
}
Raichu.prototype = Object.create(Pokemon.prototype)
Raichu.prototype.constructor = Raichu;
Raichu.prototype.evolve = function () {
	return new Raichu()
}
const pok = new Charizard()
console.log(pok)