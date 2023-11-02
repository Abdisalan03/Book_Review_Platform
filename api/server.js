import express from "express"
import adminRoutes from './admin.js'
import userRoutes from './users.js';
import bookRoutes from './books.js'
import reviewRoutes from './reviews.js'
import replyRoutes from './replies.js'
import ratingRoutes from './rating.js'
import recommendationRoutes from './recommendation.js'
import userActivityRoutes from './user_activity.js'

const server = express()

// Middleware
server.use(express.json())
// Routes
server.use('/admins', adminRoutes);
server.use('/users', userRoutes);
server.use('/books', bookRoutes);
server.use('/reviews', reviewRoutes);
server.use('/replies', replyRoutes);
server.use('/ratings', ratingRoutes);
server.use('/recommendation', recommendationRoutes);
server.use('/user-activity', userActivityRoutes);



export default server