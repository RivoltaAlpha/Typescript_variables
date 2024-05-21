const objectArraysTuples = () => {
  // objects
  // type guards your object to make it type safe
  // TypeScript can infer the types of properties based on their values.
  console.log("   ");
  console.log("--Typescript Objects, Arrays, Tuples:--");
  const person: {
    name: string;
    age: number;
    hobbies: String[];
    roles: String[];
  } = {
    name: "Tiffany",
    age: 21,
    hobbies: ["skating", "reading Manhwas", "Watching Anime"],
    roles: ["secretary", "a student Ambassador"],
  };
  console.log(
    `my name is ${person.name}, I am ${person.age} years old. My roles are being a ${person.roles} and my hobbies are ${person.hobbies}`
  );

  // defining the object type
  let car: {
    make: string;
    model: string;
    year: number;
    chargeVoltage?: number;
  };

  //initializing the object
  car = {
    make: "Tesla",
    model: "Model S",
    year: 2020,
    chargeVoltage: 220,
  };
  console.log(
    `I own a ${car.year} ${car.make} ${car.model} and it charges at ${car.chargeVoltage} volts`
  );

  // Index Signatures
  // Index signatures can be used for objects without a defined list of properties.
  const nameAgeMap: { [index: string]: number } = {};
  nameAgeMap.Jack = 25;
  console.log(nameAgeMap); // no error

  //2.Arrays
  // TypeScript has a specific syntax for typing arrays.
  let colors: string[];
  colors = ["red", "green", "blue"];
  console.log(colors);

  let EvenNumbers: number[] = [2, 4, 6, 8];

  let truths: boolean[] = [true, false, true, true, false];

  // list even numbers

  // EvenNumbers.forEach((num) => {
  //     console.log(num);
  // });

  // colors.push("yellow");
  // colors.shift()
  // console.log(colors.length);

  // console.log(colors)

  //readonly arrays
  let estateIOwn: readonly string[] = ["house", "car", "land", "boat"];
  // estateIOwn.push("yatch") // error;

  const numbers = [1, 2, 3]; // inferred to type number[]
  numbers.push(4); // no error
  // numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
  console.log(numbers);
  // let head: number = numbers[0]; // no error
  // console.log(head);

  // 3.Tuples : fixed length & types arrays
  // A tuple is a typed array with a pre-defined length and types for each index.
  // cant be set on wrong order. Order matters

  // let mycar = [2002, "Toyota", "Corolla"];
  // const [year, make, model] = mycar;

  // let myCar: [number,string,string];
  // myCar = [2002, "Toyota", "Corolla"];

  //readonly tuples
  let myCar: readonly [number, string, string] = [2002, "Audi", "RS7"];
  // myCar.push("yatch") // error;

  console.log(myCar);
};
export default objectArraysTuples;
