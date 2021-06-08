// const getData = (resource) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();
//     request.addEventListener("readystatechange", () => {
//       if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText);
//         resolve(data);
//       }
//       //      console.log(data) }
//       else if (request.readyState === 4) {
//         reject("Error in getting resource");
//       }
//     });

//     request.open("GET", resource);
//     request.send();
//   });
// };

// getData("https://jsonplaceholder.typicode.com/todos/1")
//   .then((data) => {
//     console.log("Data", data);
//     return getData("https://jsonplaceholder.typicode.com/todos/2");
//   })
//   .then((data) => {
//     console.log("Data", data);
//     return getData("https://jsonplaceholder.typicode.com/todos/3");
//   })
//   .then((data) => {
//     console.log("Data", data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const getodo = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  if (response.status !== 200) {
    throw new Error("Error has been caught");
  }
  const data= await response.json();
  return data;
};


getodo()
  .then(data=> console.table("Data: ",data[0]))
  .catch(err=> console.log(err))