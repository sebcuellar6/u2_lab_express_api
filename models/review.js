
const  { Schema } = require('mongoose')

const reviewSchema = new Schema(
    {
        movie_id: { type: Schema.Types.ObjectId, ref: 'Movie', required: true },
        score: { type: Number, required: true, min: 1, max: 10 },
        comment: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = reviewSchema