// Define the car object
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  
  // Function to merge two car objects
  function mergeCars(car1, car2) {
    // Create a new object to store the merged properties
    var mergedCar = {};
  
    // Copy properties from the first car
    for (var prop in car1) {
      if (car1.hasOwnProperty(prop)) {
        mergedCar[prop] = car1[prop];
      }
    }
  
    // Copy properties from the second car, overwrite if already exists
    for (var prop in car2) {
      if (car2.hasOwnProperty(prop)) {
        mergedCar[prop] = car2[prop];
      }
    }
  
    return mergedCar;
  }
  
  // Example usage:
  var car1 = new Car("Tata", "Safari", 2020);
  var car2 = new Car("Honda", "City", 2022);
  
  var mergedCar = mergeCars(car1, car2);
  console.log(mergedCar);
  