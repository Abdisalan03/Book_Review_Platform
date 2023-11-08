import express from "express"
import prisma from "./lib/index.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import "dotenv/config.js"

const SECRET_KEY = "secretkey1234";



const router = express.Router();
// User Signup
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      return res.status(409).json({ status: 409, message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: hashedPassword,
      },
    });

    res.status(201).json({ status: 201, message: "User created successfully", newUser });

  } catch (error) {
    res.status(500).json({ status: 500, message: "Something went wrong", error: error.message });
  }
});

// User Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!existingUser) {
      return res.status(404).json({ status: 404, message: "User not found" });
    }

    const isCorrectPassword = await bcrypt.compare(password, existingUser.password);

    if (!isCorrectPassword) {
      return res.status(401).json({ status: 401, message: "Incorrect password" });
    }

    const token = jwt.sign(
      { id: existingUser.id, email: existingUser.email },
      SECRET_KEY,
      { expiresIn: "1h" }
    );

    res.status(200).json({ status: 200, message: "User logged in successfully", token });

  } catch (error) {
    res.status(500).json({ status: 500, message: "Something went wrong", error: error.message });
  }
});

export default router;