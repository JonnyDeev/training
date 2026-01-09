let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//MAP

const arr1Increased = arr1.map((e) => {
  return e * 2;
});

console.log(arr1Increased); /*[ 2,4,6,8,10,12,14,16,18]*/

//FILTER

const greaterThan10 = arr1Increased.filter((item) => {
  return item > 10;
});

console.log(greaterThan10);

//REDUCE

const totalAmount = arr1.reduce((acc, count) => acc + count);

console.log(totalAmount);

//FIND
const arr2 = ["orange", "pears", "apples", "mangoes"];
const oranges = arr2.find((u) => u == "orange");

console.log(oranges);

//CHALLENGE:

/*Challenge 1 (Basic)

Given an array of users, return an array of email addresses of users who are active.
 */

const users = [
  { id: 1, email: "alice@example.com", active: true },
  { id: 2, email: "bob@example.com", active: false },
  { id: 3, email: "charlie@example.com", active: true },
  { id: 4, email: "anne@example.com", active: false },
  { id: 5, email: "clara@example.com", active: true },
];
const emails = users.filter((user) => user.active).map((user) => user.email);
console.log(emails);

// CHALLENGE:

/*Challenge 2 (Applied)

From a cart array:

[{ price: 10, qty: 2 }, { price: 5, qty: 4 }]


Calculate:

Total items

Total price */

const cart = [
  { price: 10, qty: 2 },
  { price: 5, qty: 4 },
];

const total_items = cart.reduce((accum, item) => {
  return accum.qty + item.qty;
});

const total_price = cart.reduce((accum, item) => {
  return accum.price + item.price;
});

console.log(total_items);
console.log(total_price);

// CHALLENGE:

/* You receive API data of orders:

Group orders by status

Count how many orders per status

Return an object like:

{ pending: 3, shipped: 5, cancelled: 1 }*/

const json_data = {
  orders: [
    {
      id: 1,
      items: 2,
      total: 23.0,
      status: "pending",
    },
    {
      id: 2,
      items: 5,
      total: 150.75,
      status: "shipped",
    },
    {
      id: 3,
      items: 1,
      total: 45.0,
      status: "cancelled",
    },
    {
      id: 4,
      items: 3,
      total: 89.99,
      status: "pending",
    },
    {
      id: 5,
      items: 10,
      total: 320.0,
      status: "shipped",
    },
    {
      id: 6,
      items: 2,
      total: 55.5,
      status: "pending",
    },
    {
      id: 7,
      items: 4,
      total: 112.0,
      status: "shipped",
    },
    {
      id: 8,
      items: 1,
      total: 15.0,
      status: "shipped",
    },
    {
      id: 9,
      items: 6,
      total: 210.0,
      status: "shipped",
    },
  ],
};

const status_summary = {
  pending: 0,
  shipped: 0,
  cancelled: 0,
};
const copy = json_data;
let grouped_by_status = json_data.orders;

const grouped = grouped_by_status.sort((a, b) => {
  const statusA = a.status.toUpperCase();

  const statusB = b.status.toUpperCase();
  if (statusA < statusB) {
    return 1;
  }
  if (statusB < statusA) {
    return -1;
  }

  return 0;
});

console.log(grouped);

json_data.orders.forEach((e) => {
  if (e.status === "pending") {
    status_summary.pending += 1;
  }
  if (e.status === "shipped") {
    status_summary.shipped += 1;
  }
  if (e.status === "cancelled") {
    status_summary.cancelled += 1;
  }
});

console.log(status_summary);

//CHALLENGE:

const users2 = [
  { name: "Ana", age: 22 },
  { name: "Luis", age: 17 },
  { name: "Maria", age: 30 },
];
// Do:

// ⬜ Use map → get array of names

// ⬜ Use filter → only adults (age ≥ 18)

// ⬜ Use reduce → total age sum

const names = users2.map((e) => e.name);
console.log("🚀 ~ names:", names);

const over18 = users2.filter((e) => e.age >= 18);
console.log("🚀 ~ over18:", over18);

const totalAge = users2.reduce((acc, item) => {
  return acc.age;
});
console.log("🚀 ~ totalAge:", totalAge);
