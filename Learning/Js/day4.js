// Error Handling

//Try Catch

// try {
//     console.losg('This is a test')
// } catch (error) {
//     console.error('Something is wrong')
// }
// console.log('End of the program');

//program will run to the end if there's an error

/*
Create function:

function divide(a, b) { ... }


Rules:

Throw error if b === 0

Return result otherwise
*/

const divide = (a, b) => {
  try {
    if (b == 0) {
      throw new Error("Divisor must be greater than 0");
    } else {
      result = a / b;
      console.log(result);
      return result;
    }
  } catch (error) {
    console.error(error);
  }
};
divide(4,2)
divide(6,0)