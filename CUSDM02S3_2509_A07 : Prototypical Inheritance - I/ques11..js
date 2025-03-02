function Product(name, price, quantity) {
  this.name = name
  this.price = price
  this.quantity = quantity
}
Product.prototype.getDetails=function(){
  return `${this.name} - Price: $${this.price}, Quantity: ${this.quantity}`
}
function Electronics(name, price, quantity, brand, model) {
  Product.call(this, name, price, quantity)
  this.brand = brand
  this.model = model
}
Electronics.prototype = Object.create(Product.prototype)
Electronics.prototype.constructor = Electronics
Electronics.prototype.powerOn = function(){
  console.log(`${this.brand} ${this.model} is now ON.`)
}
Electronics.prototype.powerOff=function(){
  console.log(`${this.brand} ${this.model} is now OFF.`)
}
function Clothing(name, price, quantity, size, material){
  Product.call(this, name, price, quantity)
  this.size = size
  this.material = material
}
Clothing.prototype = Object.create(Product.prototype)
Clothing.prototype.constructor = Clothing
Clothing.prototype.getClothingInfo = function(){
  return `${this.name} - Size: ${this.size}, Material: ${this.material}`
}
function Book(name, price, quantity, author, genre) {
  Product.call(this, name, price, quantity)
  this.author = author
  this.genre = genre
}
Book.prototype = Object.create(Product.prototype)
Book.prototype.constructor = Book
Book.prototype.getBookInfo = function(){
  return `${this.name} by ${this.author} - Genre: ${this.genre}`
}
const laptop = new Electronics("Laptop", 1200, 5, "Dell", "XPS 15")
console.log(laptop.getDetails())
laptop.powerOn()
laptop.powerOff()
const tshirt = new Clothing("T-Shirt", 25, 20, "M", "Cotton")
console.log(tshirt.getDetails())
console.log(tshirt.getClothingInfo())
const novel = new Book("The Alchemist", 15, 10, "Paulo Coelho", "Fiction")
console.log(novel.getDetails())
console.log(novel.getBookInfo())
