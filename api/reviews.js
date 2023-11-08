import express from "express"
import prisma from "./lib/index.js";
const router = express.Router();
import userauthenticate from "./middleware/user_authenticate.js";

// get all Review
router.get('/',userauthenticate, async (req, res) => {
    try {
      const reviews = await prisma.review.findMany();
      if (reviews) {
        res.status(200).json(reviews);
      } else {
          res.status(404).json({ message: 'reviewes not found' });
      }
      } catch(err) {
        res.status(500).json({ message: 'Failed to get reviewes ' });
      }
  });
  
  // Get ID Review
  router.get('/:id',userauthenticate, async (req, res) => {
      try {
          const reviewe = await prisma.review.findUnique({
              where: {
                  id: Number(req.params.id),
              },
          });
  
          if(reviewe) {
              res.status(200).json(reviewe);
          } else {
              res.status(404).json({ message: 'reviewes  not found' });
          }
      } catch(err) {
          res.status(500).json({ message: 'Failed to get reviewes ' });
      }
  });
  
  // Add Review
  router.post('/',userauthenticate, async (req, res) => {
      try {
          const reviewe = await prisma.review.create({
              data: req.body,
          });
  
          if (reviewe) {
              res.status(201).json(reviewe);
          } else {
              res.status(404).json({ message: 'reviewes  not found' });
          }
      } catch(err) {
          res.status(500).json({ message: 'Failed to add reviewes ' });
      }
  });
  
  // Update Review
  router.put('/:id',userauthenticate, async (req, res) => {
      try {
          const reviewe = await prisma.review.update({
              where: {
                  id: Number(req.params.id),
              },
              data: req.body,
          });
  
          if(reviewe ) {
              res.status(200).json(reviewe);
          } else {
              res.status(404).json({ message: 'reviewes  not found' });
          }
      } catch(err) {
          res.status(500).json({ message: 'Failed to update reviewes ' });
      }
  });
  
  // Delete Review
  router.delete('/:id',userauthenticate, async (req, res) => {
      try {
          const reviewe = await prisma.review.delete({
              where: {
                  id: Number(req.params.id),
              },
          });
  
          if(reviewe) {
              res.status(200).json({ message: 'reviewes  deleted' });
          } else {
              res.status(404).json({ message: 'reviewes  not found' });
          }
      } catch(err) {
          res.status(500).json({ message: 'Failed to delete reviewes ' });
      }
  });


export default router