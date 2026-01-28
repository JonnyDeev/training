require("dotenv").config();
const express = require("express");
const { PrismaClient } = require("@prisma/client");
const { PrismaPg } = require("@prisma/adapter-pg");

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

const app = express();
const port = process.env.PORT || 3000;

const createNewPost = async (title, content) => {
  const newPost = await prisma.post.create({
    data: {
      title,
      content,
      authorID: 1,
      author: 1,
    },
  });
  return newPost;
};

const createNewUser = async () => {};

app.use(express.json());

app.get("/", (req, res) => {
  res.send("App is working.");
});

app.post("/post", async (req, res) => {
  const { title, content } = req.body;
  const newPost = await prisma.post.create({
    data: {
      title,
      content,
    },
  });
  console.log(newPost);
  res.json(newPost);
});

app.post("/user", async (req, res) => {
  const { username, name, lastName, email } = req.body;
  const newUser = await prisma.user.create({
    data: {
      username,
      name,
      lastName,
      email,
      //   posts: {
      //     create: {
      //       title: "Hello",
      //       content: "world",
      //     },
      //   },
    },
  });
  console.log(newUser);
  res.json(newUser);
});

app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();

  res.json(users);
});

app.listen(port, () => {
  console.log("Server is running on port: ", port);
});
