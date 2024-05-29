
const  { Schema } = require('mongoose')

const movieSchema = new Schema(
    {
        title: { type: String, required: true },
        runTimeMinutes: { type: Number, required: true },
        rating: { type: Number, required: true, min: 1, max: 10 },
        yearReleased: { type: Number, required: true},
        description: { type: String, required: true}
    },
    { timestamps: true }
)

module.exports = movieSchema