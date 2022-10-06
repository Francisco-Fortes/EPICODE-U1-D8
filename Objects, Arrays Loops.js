/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

const firstFive = [1, 2, 3, 4, 5];

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

const me = {
  name: "Francisco",
  surname: "Fortes",
  age: 32,
  email: "fortesfco@gmail.com",
};

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

me.drivingLicense = true;

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

delete me.age;

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

const notMe = Object.assign({}, me);
notMe.name = "John";
notMe.surname = "Doe";
notMe.email = "johndoe@gmail.com";
console.log(notMe.email === me.email);

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/
let totalAmountSpentByUser = 40;
let shippingCost = 10;
let totalShoppingCart =
  totalAmountSpentByUser > 50
    ? totalAmountSpentByUser
    : totalAmountSpentByUser + shippingCost;
console.log("The total cost is ", totalShoppingCart);

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

let totalAmountSpentByUser = 100;
let blackFridayDiscount = (totalAmountSpentByUser / 100) * 20;
let shippingCost = 10;
let totalShoppingCart =
  totalAmountSpentByUser - blackFridayDiscount > 50
    ? totalAmountSpentByUser - blackFridayDiscount
    : totalAmountSpentByUser - blackFridayDiscount + shippingCost;
console.log(
  "The total cost is ",
  totalShoppingCart,
  "Thanks to the Black Friday discount you saved ",
  blackFridayDiscount
);

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

const car1 = {
  brand: "Toyota",
  model: "Starlet",
  licensePlate: 730421,
};

const car2 = Object.assign({}, car1);
car2.licensePlate = 854712;
const car3 = Object.assign({}, car1);
car3.licensePlate = 945123;
const car4 = Object.assign({}, car1);
car4.licensePlate = 254978;
const car5 = Object.assign({}, car1);
car5.licensePlate = 163048;
const car6 = Object.assign({}, car1);
car6.licensePlate = 000015;

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

const carsForRent = [car1, car2, car3, car4, car5, car6];

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

carsForRent.pop();
carsForRent.shift();

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

console.log(carsForRent);
// WIP: . to access properties of objects [] to access properties of arrays?
console.log(carsForRent.brand, carsForRent.model, carsForRent.licensePlate);

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

const carsForSale = [];
carsForSale.unshift("oldcar1");
carsForSale.push("oldcar2");
carsForSale.push("oldcar3");

const totalCars = carsForRent.concat(carsForSale);
console.log(totalCars.length);

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

for (let i = 0; i > totalCars.length; i++) {
  console.log(i);
}
{
  console.log(totalCars);
}
