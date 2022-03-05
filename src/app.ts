type Admin = {
  name: string;
  privileges: string[];
};
type Employee = {
  name: string;
  startDate: Date;
};
type ElevatedEmployee = Admin & Employee;

const emp1: ElevatedEmployee = {
  name: "Gino",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinableb = string | number;
type Numeric = number | boolean;
type Universal = Combinableb & Numeric;

function adding(a: Combinableb, b: Combinableb) {
  if (typeof a === "string" || typeof b === "string") {
    //<- is a Type Guard
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknowEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnknowEmployee) {
  console.log("Name " + emp.name);
  if ("privileges" in emp) {
    console.log("Privileges " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date " + emp.startDate);
  }
}

printEmployeeInfo(emp1);
printEmployeeInfo({ name: "Alex", startDate: new Date() });

class Car {
  drive() {
    console.log("driving");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }
  loadCargo(amount: number) {
    console.log("loading cargo... " + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function userVehicule(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

userVehicule(v1);
userVehicule(v2);

interface Bird {
  type: "Bird";
  flyingSpeed: number;
}
interface Horse {
  type: "Horse";
  runningSpeed: number;
}
type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "Bird":
      speed = animal.flyingSpeed;
      break;
    case "Horse":
      speed = animal.runningSpeed;
      break;
    default:
  }
  console.log("moving at speed " + speed);
}

moveAnimal({ type: "Bird", flyingSpeed: 50 });
