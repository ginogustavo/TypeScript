type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Gino",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinableb = string | number;
type Numeric = number | boolean;

type Universal = Combinableb & Numeric;
