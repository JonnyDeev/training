// CHALLENGE:

const user = {
  id: 1,
  name: "Jonny",
  email: "test@email.com",
  address: {
    city: "Miami",
    country: "USA",
  },
  settings: { theme: "dark" },
};

// Access name and email

// Access city

// Safely access user.phone (no error)

console.log(`Name: ${user.name} Email: ${user.email}`);

console.log(`City: ${user.address.city}`);

console.log(`Phone: ${user?.phone}`);

console.log(user.settings.theme);

// Using the same object:

// Destructure:

// name

// email

// city (from address)

// Rename name → fullName

// Provide default value for phone

const { name: fullName, email } = user;
console.log(fullName);
const { city } = user.address;

const res = {
  data: {
    orders: [
      { id: 1, total: 30 },
      { id: 2, total: 70 },
    ],
  },
};

//Get first order's total

const {
  data: {
    orders: {
      [0]: { total },
    },
  },
} = res;
console.log("🚀 ~ total:", total);
