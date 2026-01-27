require("dotenv").config();
const express = require("express");
const { PrismaClient } = require("@prisma/client");
const { PrismaPg } = require("@prisma/adapter-pg");

const app = express();

// Adapter = bridge to PostgreSQL
const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

// Prisma Client
const prisma = new PrismaClient({ adapter });

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API working 🚀");
});

app.post("/users", async (req, res) => {
  const { name, email } = req.body;

  const user = await prisma.user.create({
    data: { name, email }
  });

  res.json(user);
});

app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
