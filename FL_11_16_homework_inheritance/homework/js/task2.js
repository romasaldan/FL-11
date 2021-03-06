Object.create = function (proto,properties) {
//	proto should be objects
	if(typeof proto!=='object'&&typeof proto!=='function') {
		console.log('first parameter is not object or function.')
		return;
	}
	const Func = new Function()
	Func.prototype = proto;
	const helpObj = new Func()
//	second parameter must be object descriptor
	if(typeof properties!=='object'&&typeof properties!=='undefined') {
		console.log('second parameter is not object descriptor')
		return;
	}
	for (let prop in properties) {
		if(Object.prototype.hasOwnProperty.call(properties,prop)) {
			Object.defineProperty(helpObj,prop,properties[prop]) 
		}
	}	
	return helpObj
}
