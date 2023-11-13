import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function createRatingReview(req, res) {
    const { rating, review, userId, driverId } = req.body;
    try {
        const newRatingReview = await prisma.ratingReview.create({
            data: {
                rating,
                review,
                userId,
                driverId
            }
        });
        res.status(201).json(newRatingReview);
    } catch (error) {
        res.status(500).json({ error: 'There was a server side error' });
    }
}

export async function getAllRatingReviews(req, res) {
    const { driverId } = req.query;
    try {
        const ratingReviews = await prisma.ratingReview.findMany({
            where: {
                driverId
            }
        });
        res.status(200).json(ratingReviews);
    } catch (error) {
        res.status(500).json({ error: 'There was a server side error' });
    }
}