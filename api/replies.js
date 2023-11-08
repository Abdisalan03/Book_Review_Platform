import express from "express";
import prisma from "./lib/index.js";
const router = express.Router();
import userauthenticate from "./middleware/user_authenticate.js";
// Define reply routes here

// get all Replies
router.get('/', userauthenticate,async (req, res) => {
    try {
        const replies = await prisma.reply.findMany();
        if (replies) {
            res.status(200).json(replies);
        } else {
            res.status(404).json({ message: 'replies not found' });
        }
    } catch(err) {
        res.status(500).json({ message: 'Failed to get replies' });
    }
});

// Get ID Reply
router.get('/:id',userauthenticate, async (req, res) => {
    try {
        const reply = await prisma.reply.findUnique({
            where: {
                id: Number(req.params.id),
            },
        });

        if(reply) {
            res.status(200).json(reply);
        } else {
            res.status(404).json({ message: 'reply not found' });
        }
    } catch(err) {
        res.status(500).json({ message: 'Failed to get reply' });
    }
});

// Add Reply
router.post('/',userauthenticate, async (req, res) => {
    try {
        const reply = await prisma.reply.create({
            data: req.body,
        });

        if (reply) {
            res.status(201).json(reply);
        } else {
            res.status(404).json({ message: 'reply not found' });
        }
    } catch(err) {
        res.status(500).json({ message: 'Failed to add reply' });
    }
});

// Update Reply
router.put('/:id',userauthenticate, async (req, res) => {
    try {
        const reply = await prisma.reply.update({
            where: {
                id: Number(req.params.id),
            },
            data: req.body,
        });

        if(reply ) {
            res.status(200).json(reply);
        } else {
            res.status(404).json({ message: 'reply not found' });
        }
    } catch(err) {
        res.status(500).json({ message: 'Failed to update reply' });
    }
});

// Delete Reply
router.delete('/:id',userauthenticate, async (req, res) => {
    try {
        const reply = await prisma.reply.delete({
            where: {
                id: Number(req.params.id),
            },
        });

        if(reply) {
            res.status(200).json({ message: 'reply deleted' });
        } else {
            res.status(404).json({ message: 'reply not found' });
        }
    } catch(err) {
        res.status(500).json({ message: 'Failed to delete reply' });
    }
});

export default router;