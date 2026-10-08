
//simple javascript program using object and funtion



// 1. Creating an object using Object Literal syntax
const car = {
  brand: "Tesla",
  model: "Model 3",
  year: 2024,
  isElectric: true,
  
  // 2. Adding a method (a function inside an object)
  displayInfo: function() {
    // 'this' refers to the current object (car)
    return `This is a ${this.year} ${this.brand} ${this.model}.`;
  }
};

// 3. Accessing properties using Dot Notation (.)
console.log("--- Accessing Properties ---");
console.log(car.brand);      // Output: Tesla
console.log(car.model);      // Output: Model 3

// 4. Accessing properties using Bracket Notation ([])
// Useful when the property name is stored in a variable
const propertyName = "year";
console.log(car[propertyName]); // Output: 2024

// 5. Calling an object method
console.log(car.displayInfo()); // Output: This is a 2024 Tesla Model 3.

// 6. Modifying and adding new properties
console.log("\n--- Modifying the Object ---");
car.year = 2026;              // Modifying an existing property
car.color = "Solid Black";    // Adding a completely new property

console.log(car.year);       // Output: 2026
console.log(car.color);      // Output: Solid Black
