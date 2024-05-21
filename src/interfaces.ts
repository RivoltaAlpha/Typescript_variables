//Interfaces are similar to type aliases, except they only apply to object types
interface Rectangle {
  height: number;
  width: number;
}

const rectangle1: Rectangle = {
  height: 20,
  width: 10,
};
console.log(rectangle1);

//extending Interfaces
//Extending an interface means you are creating a new interface with the same properties
// as the original, plus something new.
interface Rectangle {
  height: number;
  width: number;
}

interface ColoredRectangle extends Rectangle {
  color: string;
}

const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "red",
};
console.log(coloredRectangle);
