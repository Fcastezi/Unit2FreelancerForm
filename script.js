//get the elements
const price = document.querySelector('#price');
//make an object array for all the free lancers
const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

//make a new array to add the chosen free lancers from the random number
const newLancers = [];
//make an interval to call the addList function every sec
//const intervalId = setInterval(addList, 1000);
//call the render function
render();
//make a function that renders the new lancers in the li
function render() {
  //get the ul lancers
  const ul = document.querySelector("#lancers");
  //iterate the shapes object array
  const element = freelancers.map((lancer) => {
    //make a li for every index
    const li = document.createElement("li");
    //put the color and sizes in the li
    li.classList.add(lancer.name, lancer.occupation, lancer.price);
    //return the value
    return li;
  });
  //get the ul squares and put the li
  ul.replaceChildren(...element);
}
//make a function to add the shapes
function addList() {
  //make a random number and put it as index in the color array
  //const la = freelancers[Math.floor(Math.random() * freelancers.length)];
  //put the color and size in the shapes array
  newLancers.push({ la });
  console.log(newLancers)
//call the render function
render();
//Stop adding shapes if we've reached the maximum number of shapes
  if (newLancers.length >= 10) {
    clearInterval(intervalId);
  }
}























