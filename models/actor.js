
const  { Schema } = require('mongoose')

const actorSchema = new Schema(
    {
        movie_id: { type: Schema.Types.ObjectId, ref: 'Movie', required: true },
        name: { type: String, required: true },
        age: { type: Number, required: true },
        isAlive: { type: Boolean, required: true }
    },
    { timestamps: true },
)

module.exports = actorSchema