const mongoose = require('mongoose')
const movieSchema = require('./movie')
const actorSchema = require('./actor')
const reviewSchema = require('./review')

const Movie = mongoose.model('Movie', movieSchema)
const Actor = mongoose.model('Actor', actorSchema)
const Review = mongoose.model('Review', reviewSchema)

module.exports = {
    Movie,
    Actor,
    Review
}