function Animal(){
  this.type = "Animal"
}
Animal.prototype.sound = function () {
  console.log("Animal sound")
}
function Dog() {
  this.type = "Dog"
}
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog
Dog.prototype.sound = function () {
  console.log("Bark")
}
const myDog = new Dog()
myDog.sound()
const genericAnimal = new Animal()
genericAnimal.sound()
console.log(myDog instanceof Dog)
console.log(myDog instanceof Animal)
console.log(myDog.type)
