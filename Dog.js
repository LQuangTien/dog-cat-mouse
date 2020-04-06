var chalk = require('chalk')

function Dog(name){
	this.name = name
	this.stomach = []
}
Dog.prototype.eat = function(Cat){
	this.stomach.push(Cat.name)
}
Dog.prototype.sayHi = function() {
	// body...
	console.log('Hi! I am a dog. My name is ' + chalk.blue(this.name))	
};

module.exports = Dog;