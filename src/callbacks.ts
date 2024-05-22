const callbacks = () => {
  console.log("   ");
  console.log("--Typescript callbacks:--");
  // 1
  // functions passed as arguments to other functions.
  // Imagine them as “callbacks” that let you know when something has finished.
  function fetchData(callback: (data: any) => void) {
    // Simulate fetching data asynchronously
    // takes a callback function as a parameter
    setTimeout(() => {
      const data = "Sample data 1";
      callback(data);
    }, 500);

    // Simulate fetching more data asynchronously after a delay
    setTimeout(() => {
      const data = "Sample data 2";
      callback(data);
    }, 1000);
  }

  // Usage of the callback function
  fetchData((data) => {
    console.log("Data received:", data);
  });

  // 2
  // A simple function that adds two numbers
  function addNumbers(
    a: number,
    b: number,
    callback: (result: number) => void
  ) {
    const sum = a + b;
    callback(sum);
  }
  // Usage: Call addNumbers and provide a callback function
  addNumbers(3, 5, (result) => {
    console.log(`The sum is ${result}`);
  });

  // 3
  const getBeef = (callback: (beef: string) => void) => {
    // Simulate getting beef (e.g., from the fridge)
    setTimeout(() => {
      const beef = "beef";
      callback(beef);
      console.log("getting the beef");
    }, 1000);
  };

  const cookBeef = (
    rawBeef: string,
    callback: (cookedBeef: string) => void
  ) => {
    // Simulate cooking the beef
    setTimeout(() => {
      const cookedBeef = `cooked ${rawBeef}`;
      console.log(`cooked the ${rawBeef}`);
      callback(cookedBeef);
    }, 1500);
  };

  const getBuns = (callback: (buns: string) => void) => {
    // Simulate getting burger buns
    setTimeout(() => {
      const buns = "buns";
      console.log("getting the burns");
      callback(buns);
    }, 800);
  };

  const putBeefBetweenBuns = (
    buns: string,
    cookedBeef: string,
    callback: (burger: string) => void
  ) => {
    // Simulate assembling the burger
    setTimeout(() => {
      const burger = `${cookedBeef} between ${buns}`;
      console.log(`put ${cookedBeef} between ${buns}`);
      callback(burger);
    }, 1000);
  };

  // Now let's make the burger!
  getBeef((beef) => {
    cookBeef(beef, (cookedBeef) => {
      getBuns((buns) => {
        putBeefBetweenBuns(buns, cookedBeef, (burger) => {
          console.log(`Enjoy your ${burger}! 🎉`);
        });
      });
    });
  });
};
export default callbacks;
