import { add, divide } from "./math.js";
import salute from "./user.js";

try {
  console.log("🚀 ~ salute('jonny'):", salute("jonny"));
  console.log("🚀 ~ add(2,5):", add(2, 5));

  console.log("🚀 ~ divide(8/0):", divide(8 / 0));
} catch (error) {
  console.error(error);
}
