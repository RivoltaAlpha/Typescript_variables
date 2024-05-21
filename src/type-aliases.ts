// 1. Type Checking
// Type Aliases can be used for
import { oddType, evenType } from "./externalTypes";

const typeAliases = () => {
  //   Type Aliases : Type Aliases allow defining types with a custom name (an Alias).
  console.log("   ");
  console.log("--Typescript type Aliases:--");
  //creating a variable,  type and assign a value
  let age: number = 20;

  //creating a type alias
  type age2 = number;

  let graceAge: age2 = 20;

  type stringOrNumber = string | number; //union type

  let ourValueOrString: stringOrNumber = "name"; // "name" or 20

  //2 arrays
  // const evenNumbers: number[] = [2, 4, 6, 8, 10];
  // type oddType = number[];
  // type evenType = Array<number>;
  let evenNumbers: evenType = [2, 4, 6, 8, 10];
  let oddNumbers: oddType = [1, 3, 5, 7, 9];

  console.log(`Even numbers ${evenNumbers}`);
  console.log(`Odd numbers ${oddNumbers}`);

  // 3
  //complex object
  type CarYear = number;
  type CarType = string;
  type CarModel = string;
  type Car = {
    year: CarYear;
    type: CarType;
    model: CarModel;
  };

  let Tiffanyscar: Car = {
    year: 2001,
    type: "McLauren",
    model: "Audi",
  };
  console.log(
    `My car is a ${Tiffanyscar.year} ${Tiffanyscar.type} ${Tiffanyscar.model}`
  );

  //extending type aliases
  type person = {
    name: string;
    age: number;
    id: number;
    married: boolean;
    gender: string;
    //? makes it optional
    address?: {
      street: string;
      city: string;
      state: {
        stateName: string;
        stateCode: string;
      };
      zip: number;
    };
  };
  //extending type aliases
  type student = person & {
    studentId: number;
    school: string;
    grade: number;
  };
  // console.log(kevin.address.state.stateName)
};
export default typeAliases;
