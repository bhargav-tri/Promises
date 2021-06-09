// // let obj = {
// //     firstname: "Bhargav",
// //     lastname: "Trimal Kulkarni",

// // }
// // let printfulname= function (place) {
// //     return `Your fullname is : ${this.firstname} ${this.lastname} from ${place}`;
// // }
// // let obj1 = {
// //     firstname: "Neeraj",
// //     lastname: "Gudi"
// // }

// // console.log(window)

// // printfulname.call(window, "Bangalore");
// // // obj.printfulname.apply(obj1, ["Bangalore"]);
// // // let bindobj=obj.printfulname.bind(obj1);
// // // console.log(bindobj);
// // // let name=bindobj("Mys");
// // // console.log(name)

// let obj = {
//          firstname: "Bhargav",
//          lastname: "Trimal Kulkarni",

//     }
// //Debouncing

// let count=0;
// const getdata=()=>{
//      console.log(`Fetching data ... ${count++}`);
// }
// const throttle=(fn, delay)=>{
//      let flag=true;
//      return function(){
//           if(flag){
//                fn();
//                flag=false;
//           timer=setTimeout(()=>{
//                flag=true;
//           },delay)}
//      }
// }
// const efficient= throttle(getdata, 5000);

// console.log(efficient)
const getAsianCountries = async () => {
  let asian_countries = [];
  await fetch("https://covid-193.p.rapidapi.com/statistics", {
    method: "GET",
    headers: {
      "x-rapidapi-key": "8933948da5mshf56f3b3692c7ae1p113bedjsnd671312fa77f",
      "x-rapidapi-host": "covid-193.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      //   console.table(data.response)
      asian_countries = data.response.filter((res) => {
        return res.country == "India";
      });
      postDetails(
        asian_countries[0].continent,
        asian_countries[0].country,
        asian_countries[0].cases.new,
        asian_countries[0].cases.active,
        asian_countries[0].cases.critical,
        asian_countries[0].deaths.total,
        asian_countries[0].time
      );

      console.log(asian_countries);
      return asian_countries;
      // data.response.forEach(res => {
      //   res.continent === "Asia" ? asian_countries.push(res) : null
      // })
    })
    .catch((err) => {
      console.error(err);
    });
};
//    console.table(new_asian_countries)
const displayData = document.getElementById("display-data");
console.log(displayData);
const postDetails = (
  continent,
  country,
  newCases,
  active,
  critical,
  deaths,
  time
) => {
  const newDiv = document.createElement("div");
  // console.log(newDiv);
  let data = `<p>${continent}</p>
  <p>${country}</p>
  <p>${newCases}</p>
  <p>${active}</p>
  <p>${critical}</p>
  <p>${deaths}</p>
  <p>${time}</p>`;
  newDiv.innerHTML = data;
  displayData.appendChild(newDiv);
};

// {/* <p id="continent"></p>
//     <p id="country"></p>
//     <p id="new-cases"></p>
//     <p id="active"></p>
//     <p id="critical"></p>
//     <p id="deaths"></p>
//     <p id="time"></p> */}

// const letters = ["a", "b", "c", "c", "d", "d", "d", "a", "b"];

// let count = {};

// letters.forEach((letter) => {
//   count[letter] ? count[letter]++ : (count[letter] = 1);
// });

// console.log(count["e"]);

// const products = [
//   {
//     name: "Laptop",
//     price: 2000,
//     count: 5,
//   },
//   {
//     name: "MI Redmi",
//     price: 5000,
//     count: 10,
//   },
//   {
//     name: "Samsung M series Phone",
//     price: 20000,
//     count: 5,
//   },
// ];
// let tc = 0;
// let sum = 0;
// const productcount = products.map((item) => {
//   tc += item.count;
//   return tc;
//    console.log(tc);
// });
// console.log(productcount);

// const newProds = products.filter((product) => product.price >= 5000);
// console.log(newProds);

// const totalCost = newProds.reduce(
//   (acc, product) => acc + product.price * product.count,
//   0
// );

// console.log("Total price", totalCost);

// const numbers = ["1", "2", "3", "4"];
// const lett = numbers.map((number) => Number(number));

// console.log(lett);
