import { prisma } from "../lib/prisma";

const main = async () => {
  const newTask = await prisma.task.create({
    data: {
      title: "sacar al perro",
    },
  });
  console.log(newTask);
};

main();
