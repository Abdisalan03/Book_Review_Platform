import express from "express";
import prisma from "./lib/index.js";
import userauthenticate from "./middleware/user_authenticate.js";
const router = express.Router();

// Define User_activity routes here

// get all User_activities
router.get('/', userauthenticate, async (req, res) => {
    try {
        const userActivities = await prisma.userActivity.findMany();
        if (userActivities) {
            res.status(200).json(userActivities);
        } else {
            res.status(404).json({ message: 'User_activities not found' });
        }
    } catch(err) {
        res.status(500).json({ message: 'Failed to get User_activities' });
    }
});

// Get ID User_activity
router.get('/:id', userauthenticate,async (req, res) => {
    try {
        const userActivity = await prisma.userActivity.findUnique({
            where: {
                id: Number(req.params.id),
            },
        });

        if(userActivity) {
            res.status(200).json(userActivity);
        } else {
            res.status(404).json({ message: 'User_activity not found' });
        }
    } catch(err) {
        res.status(500).json({ message: 'Failed to get User_activity' });
    }
});

// Add User_activity
router.post('/', userauthenticate,async (req, res) => {
    try {
        const userActivity = await prisma.userActivity.create({
            data: req.body,
        });

        if (userActivity) {
            res.status(201).json(userActivity);
        } else {
            res.status(404).json({ message: 'User_activity not found' });
        }
    } catch(err) {
        res.status(500).json({ message: 'Failed to add User_activity' });
    }
});

// Update User_activity
router.put('/:id',userauthenticate, async (req, res) => {
    try {
        const userActivity = await prisma.userActivity.update({
            where: {
                id: Number(req.params.id),
            },
            data: req.body,
        });

        if(userActivity) {
            res.status(200).json(userActivity);
        } else {
            res.status(404).json({ message: 'User_activity not found' });
        }
    } catch(err) {
        res.status(500).json({ message: 'Failed to update User_activity' });
    }
});

// Delete User_activity
router.delete('/:id', userauthenticate,async (req, res) => {
    try {
        const userActivity = await prisma.userActivity.delete({
            where: {
                id: Number(req.params.id),
            },
        });

        if(userActivity) {
            res.status(200).json({ message: 'User_activity deleted' });
        } else {
            res.status(404).json({ message: 'User_activity not found' });
        }
    } catch(err) {
        res.status(500).json({ message: 'Failed to delete User_activity' });
    }
});

export default router;