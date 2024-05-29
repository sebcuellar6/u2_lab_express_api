const express = require('express')
const cors = require('cors')
const db = require('./db')
const { Movie, Review, Actor } = require('./models')
const PORT = process.env.PORT || 3002
const bodyParser = require(`body-parser`)
const logger = require(`morgan`)
const ActorController = require('./controllers/ActorController')
const MovieController = require('./controllers/MovieController')
const ReviewController = require('./controllers/ReviewController')

const app = express()

app.use(cors())
app.use(express.json())

app.use(logger('dev'))

app.get('/', (req,res) => {
    res.send('welcome')
})

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
  })

app.get('/actors', ActorController.getAllActors)
app.get('/movies', MovieController.getAllMovies)
app.get('/reviews', ReviewController.getAllReviews)

app.get('/brands/:id', ActorController.getActorById)
app.get('/movies/:id', MovieController.getMovieById)
app.get('/reviews/:id', ReviewController.getReviewById)

//create
app.post('/Actors', ActorController.createActor)
app.post('/movies', MovieController.createMovie)
app.post('/reviews', ReviewController.createReview)

//update
app.put('/Actors/:id', ActorController.updateActor)
app.put('/movies/:id', MovieController.updateMovie)
app.put('/reviews/:id', ReviewController.updateReview)

//delete
app.delete('/Actors/:id', ActorController.deleteActor)
app.delete('/movies/:id', MovieController.deleteMovie)
app.delete('/reviews/:id', ReviewController.deleteReview)