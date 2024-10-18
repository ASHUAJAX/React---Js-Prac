const passengers = [
  {
    id: 1,
    passengerName: "Freddie Mercury",
    isVegetarianOrVegan: false,
    connectedFlights: 2,
  },
  {
    id: 2,
    passengerName: "Amy Winehouse",
    isVegetarianOrVegan: true,
    connectedFlights: 4,
  },
  {
    id: 3,
    passengerName: "Kurt Cobain",
    isVegetarianOrVegan: true,
    connectedFlights: 3,
  },
  {
    id: 3,
    passengerName: "Michael Jackson",
    isVegetarianOrVegan: true,
    connectedFlights: 1,
  },
];

passengers.map((elm)=>{
  console.log(elm.passengerName);
})

const filteredArr = passengers.filter((elm)=>elm.isVegetarianOrVegan === true);

//unique passengers
const uniquePassengers = [
  ...new Map(passengers.map((item) => [item.id, item])).values()
];

//sortedArr
const soretedArr = uniquePassengers.sort((a,b)=>a.id - b.id)

console.log(filteredArr);
// console.log(soretedArr);
// console.log(uniquePassengers);