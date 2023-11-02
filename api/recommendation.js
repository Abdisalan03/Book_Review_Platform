import express from "express";
import prisma from "./lib/index.js";
const router = express.Router();

// Define recommendation routes here

// get all Recommendation
router.get('/', async (req, res) => {
    try {
        const recommendations = await prisma.recommendation.findMany();
        if (recommendations) {
            res.status(200).json(recommendations);
        } else {
            res.status(404).json({ message: 'recommendations not found' });
        }
    } catch(err) {
        res.status(500).json({ message: 'Failed to get recommendations' });
    }
});

// Get ID Recommendation
router.get('/:id', async (req, res) => {
    try {
        const recommendation = await prisma.recommendation.findUnique({
            where: {
                id: Number(req.params.id),
            },
        });

        if(recommendation) {
            res.status(200).json(recommendation);
        } else {
            res.status(404).json({ message: 'recommendation not found' });
        }
    } catch(err) {
        res.status(500).json({ message: 'Failed to get recommendation' });
    }
});

// Add Recommendation
router.post('/', async (req, res) => {
    try {
        const recommendation = await prisma.recommendation.create({
            data: req.body,
        });

        if (recommendation) {
            res.status(201).json(recommendation);
        } else {
            res.status(404).json({ message: 'recommendation not found' });
        }
    } catch(err) {
        res.status(500).json({ message: 'Failed to add recommendation' });
    }
});

// Update Recommendation
router.put('/:id', async (req, res) => {
    try {
        const recommendation = await prisma.recommendation.update({
            where: {
                id: Number(req.params.id),
            },
            data: req.body,
        });

        if(recommendation) {
            res.status(200).json(recommendation);
        } else {
            res.status(404).json({ message: 'recommendation not found' });
        }
    } catch(err) {
        res.status(500).json({ message: 'Failed to update recommendation' });
    }
});

// Delete Recommendation
router.delete('/:id', async (req, res) => {
    try {
        const recommendation = await prisma.recommendation.delete({
            where: {
                id: Number(req.params.id),
            },
        });

        if(recommendation) {
            res.status(200).json({ message: 'recommendation deleted' });
        } else {
            res.status(404).json({ message: 'recommendation not found' });
        }
    } catch(err) {
        res.status(500).json({ message: 'Failed to delete recommendation' });
    }
});

export default router;