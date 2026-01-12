// // Async Javascript

// // CALLBACKS

// const myTimedMessage = (message, time) => {
//   setTimeout(() => {
//     console.log(message);
//   }, time);
// };

// myTimedMessage("hello, this is a timed message", 2000);

// // PROMISES

// const myPromise = new Promise((resolve, reject) => {
//   const random = Math.floor(Math.random() * 2);
//   if (random === 0) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// myPromise
//   .then(() => {
//     console.log("success!");
//   })
//   .catch(() => {
//     console.error("somewhing went wrong");
//   });

// ASYNC/AWAIT

async function getProducts() {
  try {
    const res = await fetch("https://dummyjson.com/products?limit=10");
    data = await res.json();
    console.log(data);
  } catch (error) {
    console.error(Error);
  }
}

getProducts();
