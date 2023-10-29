import express from "express"
import prisma from "./lib/index.js";
const router = express.Router();

// get all users 
router.get("/", async (req, res) => {
  
  try {
    const users = await prisma.user.findMany();
    if (users.length === 0) {
      return res
        .status(404)
        .json({ status: 404, message: "users not found" });
    }

    res.json(users);
  } catch (error) {
    res.status(500).json({  message: error.message });
  }
});

// get user by id
router.get("/:id", async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: Number(req.params.id) },
    });
    if (!user) {
      return res.status(404).json({ status: 404, message: "user not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({  message: error.message });
  }
});
// create new user
router.post("/", async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });
    
    if (!user) {
      return res.status(400).json({
        status: 400,
        message: "User was not created!",
      });
    }

    res.status(200).json({
      message: "User successfully created!",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "An error occurred while creating the user.",
    });
  }
});

// update user
router.put("/:id", async (req, res) => {
  try {
    const user = await prisma.user.update({
      where: {
        id: Number(req.params.id),
      },
      data: req.body,
    });
    if (!user) {
      return res
        .status(400)
        .json({ status: 400, message: "user was not updated!" });
    }

    res
      .status(200)
      .json({  message: "user successFully updated!" });
  } catch (error) {
    res.status(500).json({  message: error.message });
  }
});

// delete user
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.delete({
      where: {
        id: Number(id),
      },
    });
    if (!user) {
      return res
        .status(400)
        .json({ status: 400, message: "user was not deleted!" });
    }

    res
      .status(200)
      .json({  message: `user ${id} successFully deleted` });
  } catch (error) {
    res.status(500).json({  message: error.message });
  }
});

export default router