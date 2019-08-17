function assign(target,...rest) {
	for(let i=0;i<rest.length;i++) {
		for (let prop in rest[i]) {
			if(Object.prototype.hasOwnProperty.call(rest[i],prop)) {
				target[prop] = rest[i][prop] 
			}
		}
	}
	return target;
}
//console.log(assign({},{f:3},4,'abc',{a:2,f:1}))