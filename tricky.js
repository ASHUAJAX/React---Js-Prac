function fruit() {
  funcy();
//   name = 'banana' // banana
  console.log(name);

  //   console.log(price); can't access price before initialization
  var name = "apple";
  let price = "1"; //

  //   var funcy = () => {
  //     console.log("function Called"); // funcy is not functions
  //   };
  //   let/const funcy = () => {
  //     console.log("function Called"); // can't access funcy before initialization
  //   };

  function funcy() {
    console.log("function Called"); // function called
  }

}

// fruit();

console.log(1+2);
