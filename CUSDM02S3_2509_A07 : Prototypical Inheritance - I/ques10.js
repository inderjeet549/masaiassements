function Car(make, model, year, type) {
  this.make = make
  this.model = model
  this.year = year
  this.type = type
  this.isAvailable = true
}
function Customer(name) {
  this.name = name
  this.rentedCars = []
}
Customer.prototype.rentCar = function(car){
  if (car.isAvailable){
    car.isAvailable = false
    this.rentedCars.push(car)
    console.log(`${this.name} rented a ${car.make} ${car.model}.`)
  }else{
    console.log(`Sorry, the ${car.make} ${car.model} is already rented.`)
  }
}
Customer.prototype.returnCar = function(car){
  if (this.rentedCars.includes(car)){
    console.log(`${this.name} is returning the ${car.make} ${car.model}...`)
    setTimeout(() => {
      car.isAvailable = true
      this.rentedCars = this.rentedCars.filter((c) => c !== car)
      console.log(`${this.name} successfully returned the ${car.make} ${car.model}.`)
    }, 2000)
  } else {
    console.log(`${this.name} does not have this car rented.`)
  }
}
function PremiumCustomer(name, discountRate) {
  Customer.call(this, name)
  this.discountRate = discountRate
}
PremiumCustomer.prototype = Object.create(Customer.prototype)
PremiumCustomer.prototype.constructor = PremiumCustomer
function calculateRentalPrice(car, days, customer) {
  const baseRate = 50
  let typeMultiplier = car.type === "SUV" ? 1.5 : 1
  let price = baseRate * typeMultiplier * days
  if (customer instanceof PremiumCustomer) {
    price *= (1 - customer.discountRate / 100)
  }
  console.log(`Total rental price for ${customer.name}: $${price.toFixed(2)}`)
  return price
}
function Maintenance(car, delay) {
  console.log(`Car ${car.make} ${car.model} is under maintenance...`)
  setTimeout(() => {
    car.isAvailable = true
    console.log(`Maintenance complete for ${car.make} ${car.model}. It is now available.`)
  }, delay)
}
const car1 = new Car("Toyota", "Corolla", 2020, "Sedan")
const car2 = new Car("Ford", "Explorer", 2022, "SUV")
const car3 = new Car("Honda", "Civic", 2019, "Sedan")
const customer1 = new Customer("Alice")
const premiumCustomer = new PremiumCustomer("Bob", 10)
customer1.rentCar(car1)
premiumCustomer.rentCar(car2)
calculateRentalPrice(car1, 3, customer1)
calculateRentalPrice(car2, 5, premiumCustomer)
customer1.returnCar(car1)
premiumCustomer.returnCar(car2)
Maintenance(car3, 3000)
