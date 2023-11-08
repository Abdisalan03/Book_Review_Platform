// Create endpoints for books, make sure to use the middleware to authenticate the token
import express from "express";
import prisma from "./lib/index.js";
import admin_authenticate from "./middleware/admin_authenticate.js";
const router = express.Router();

router.get("/", admin_authenticate, async (req, res) => {
  try {
    const books = await prisma.book.findMany();
    if (books.length === 0) {
      return res.status(404).json({ status: 404, message: "Books not found!" });
    }

    res.json(books);
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
});

router.get("/:id", admin_authenticate,async (req, res) => {
  try {
    const { id } = req.params;

    const book = await prisma.book.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!book) {
      return res.status(404).json({ status: 404, message: "Book not found" });
    }

    res.json(book);
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
});

router.post("/", admin_authenticate, async (req, res) => {
  try {
    const { title, author, year, adminId, price } = req.body;

    const newBook = await prisma.book.create({
      data: {
        title,
        author,
        year,
        adminId,
        price,
      },
    });

    if (!newBook) {
      return res
        .status(400)
        .json({ status: 400, messsage: "Book was not created!" });
    }

    res
      .status(200)
      .json({ status: 200, message: "Book successFully created!" });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
});

router.put("/:id", admin_authenticate, async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, year, adminId } = req.body;

    const updateBook = await prisma.book.update({
      where: {
        id: Number(id),
      },

      data: {
        title,
        author,
        adminId,
      },
    });

    if (!updateBook) {
      return res
        .status(400)
        .json({ status: 400, message: "Book was not updated!" });
    }

    res.status(200).json({ status: 200, message: "Book successFully update" });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
});

router.delete("/:id", admin_authenticate, async (req, res) => {
  try {
    const { id } = req.params;

    const deleteBook = await prisma.book.delete({
      where: {
        id: Number(id),
      },
    });

    if (!deleteBook) {
      return res
        .status(400)
        .json({ status: 400, message: "Book was not deleted!" });
    }

    res
      .status(200)
      .json({ status: 200, message: `Book ${id} successFully deleted` });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
});

export default router;