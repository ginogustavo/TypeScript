/**
 * Intersection Types, allow us to combine other types
 */

//type definition
type Admin61 = {
  name: string;
  privileges: string[];
};

type Employee61 = {
  name: string;
  startDate: Date; // type based on Date object of JS
};

//Combining the 2 types
type ElevatedEmployee61 = Admin61 & Employee61;

const e61: ElevatedEmployee61 = {
  name: "Gino",
  privileges: ["create-server"],
  startDate: new Date(),
};

// we could use interfaces with extends.

// In the case of Union Types in Intersection, in the case of object types is the combination
// you can use it with "any" type

type Combinable61 = string | number;
type Numeric61 = number | boolean;

type Universal61 = Combinable61 & Numeric61;
// Since number is the only intersection that's the type for Universal
