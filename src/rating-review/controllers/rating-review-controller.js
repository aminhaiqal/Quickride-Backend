import RatingReview, { find } from '../models/rating-review';

export async function createRatingReview(req, res) {
    const { rating, review } = req.body;
    try {
        const newRatingReview = new RatingReview({ rating, review });
        await newRatingReview.save();
        res.status(201).json(newRatingReview);
    } catch (error) {
        res.status(500).json({ error: 'There was a server side error' });
    }
}

export async function getAllRatingReviews(req, res) {
    try {
        const ratingReviews = await find();
        res.status(200).json(ratingReviews);
    } catch (error) {
        res.status(500).json({ error: 'There was a server side error' });
    }
}