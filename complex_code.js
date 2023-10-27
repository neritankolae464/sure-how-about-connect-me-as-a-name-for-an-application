/* 
   Filename: complex_code.js
   Content: Complex and sophisticated JavaScript code example
*/

// Complex Code Example

// Class representing a Car
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.engineStatus = false;
    this.speed = 0;
  }

  engineStart() {
    if (!this.engineStatus) {
      this.engineStatus = true;
      console.log("Engine started.");
    } else {
      console.log("Engine is already running.");
    }
  }

  accelerate(speedIncrease) {
    if (this.engineStatus) {
      this.speed += speedIncrease;
      console.log(`Speed increased by ${speedIncrease} km/h. Current speed: ${this.speed} km/h.`);
    } else {
      console.log("Engine is not running.");
    }
  }

  brake(speedDecrease) {
    if (this.engineStatus) {
      if (speedDecrease <= this.speed) {
        this.speed -= speedDecrease;
        console.log(`Speed decreased by ${speedDecrease} km/h. Current speed: ${this.speed} km/h.`);
      } else {
        console.log("Can't brake more than current speed.");
      }
    } else {
      console.log("Engine is not running.");
    }
  }
}

// Create an instance of Car class
const myCar = new Car("Tesla", "Model S", 2022);

console.log(myCar);

myCar.engineStart(); // Output: Engine started.

myCar.accelerate(50); // Output: Speed increased by 50 km/h. Current speed: 50 km/h.

myCar.brake(20); // Output: Speed decreased by 20 km/h. Current speed: 30 km/h.

myCar.accelerate(100); // Output: Speed increased by 100 km/h. Current speed: 130 km/h.

myCar.brake(150); // Output: Can't brake more than current speed.

// Additional code...

// A complex function that performs some operations
function complexFunction(parameter1, parameter2) {
  let result = parameter1 + parameter2;

  for (let i = 0; i < parameter1.length; i++) {
    result *= parameter1.charCodeAt(i);
  }

  return result;
}

console.log(complexFunction(5, 10)); // Output: 75

// More lines of code...

// Another complex logic...

// End of complex code example