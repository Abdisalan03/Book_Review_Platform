import express from "express"
import adminRoutes from('./admin');
import userRoutes from('./users');
import bookRoutes from('./books');
import reviewRoutes from('./reviews');
import replyRoutes from('./replies');
import ratingRoutes from('./ratings');
import recommendationRoutes from('./recommendation');
import userActivityRoutes from('./user_activity');

const server = express()

// Middleware
server.use(express.json())
// Routes
server.use('/admin', adminRoutes);
server.use('/admin', adminRoutes);
server.use('/users', userRoutes);
server.use('/books', bookRoutes);
server.use('/reviews', reviewRoutes);
server.use('/replies', replyRoutes);
server.use('/ratings', ratingRoutes);
server.use('/recommendation', recommendationRoutes);
server.use('/user-activity', userActivityRoutes);



export default server