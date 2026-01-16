import { users } from "./data.js";

// Create and export:

// getActiveUsers(users) ✅

// getAverageAge(users)✅

// formatUserNames(users)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const getActiveUsers = (users) => {
//   let activeUsers = users.filter((user) => {
//     return user.active === true;
//   });
//   console.log("current active users: ", activeUsers.length);
//   return activeUsers;
// };

// console.log(getActiveUsers(users));

// const getAverageAge = (users) => {
//   const userAges = users.map((user) => user.age);
//   const sumAges = userAges.reduce((acc, userAge) => {
//     return acc + userAge;
//   });
//   const averageAge = sumAges / users.length;
//   console.log(userAges);
//   console.log(averageAge.toFixed(0));
// };

// getAverageAge(users);

// FORMAT USER NAMES

// const fullNames = users.map((user) => {
//   return { fullName: `${user.first_name} ${user.last_name}` };
// });

export const fetchUsers = async () => {
  setTimeout(() => {
    try {
      const fetchedUsers = users;
      console.log(fetchedUsers);
      return fetchedUsers;
    } catch (error) {
      console.error(error);
    }
  }, 1000);
};

// const formattedUserNames = users.map(
//   ({ first_name, last_name, id, active, age }) => ({
//     id,
//     full_name: `${first_name} ${last_name}`,
//     age,
//     active,
//   })
// );
// console.log(formattedUserNames);
