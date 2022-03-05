/**
 * Type Guards
 */
type Admin62 = {
  name: string;
  privileges: string[];
};
type Employee62 = {
  name: string;
  startDate: Date;
};
type ElevatedEmployee62 = Admin62 & Employee62;

const emp62: ElevatedEmployee62 = {
  name: "Gino",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable62 = string | number;
type Numeric62 = number | boolean;
type Universal62 = Combinable62 & Numeric62;

function adding62(a: Combinable62, b: Combinable62) {
  if (typeof a === "string" || typeof b === "string") {
    //<- is a Type Guard
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknowEmployee62 = Employee62 | Admin62;

function printEmployeeInfo62(emp: UnknowEmployee62) {
  console.log("Name " + emp.name); // no problem both types have it.
  //console.log('Privileges '+ emp.privileges); // Problem! only Admin has it

  //typeof will not help, because it'd be   typeof emp === 'object'
  //to check if(emp.privileges) won't be allowed by TS

  //this allows us to check if the string exist as a property on the object(Employee)
  if ("privileges" in emp) {
    console.log("Privileges " + emp.privileges);
  }

  if ("startDate" in emp) {
    console.log("Start Date " + emp.startDate);
  }
}

printEmployeeInfo62(emp62);
printEmployeeInfo62({ name: "Alex", startDate: new Date() });

/**
 * With Classes, another type guard is: instanceof
 */

class Car62 {
  drive() {
    console.log("driving");
  }
}

class Truck62 {
  drive() {
    console.log("Driving a truck...");
  }
  loadCargo(amount: number) {
    console.log("loading cargo... " + amount);
  }
}

type Vehicle62 = Car62 | Truck62;

const v62_1 = new Car62();
const v62_2 = new Truck62();

function userVehicule62(vehicle: Vehicle62) {
  vehicle.drive();
  // vehicle.loadCargo()
  // We can use: if('loadCargo' in vehicle){}

  //more elegante + avoid mispelling on the string
  if (vehicle instanceof Truck62) {
    vehicle.loadCargo(1000);
  }
}

userVehicule62(v62_1);
userVehicule62(v62_2);

//With Interfaces theres no instances, so this type guard is not valid for Interfaces.
