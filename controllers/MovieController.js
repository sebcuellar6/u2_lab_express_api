const { Movie } = require('../models')

const getAllMovies = async (req, res) => {
    try {
        const objectArray = await Movie.find()
        res.json(objectArray)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getMovieById = async (req, res) => {
    try {
        const { id } = req.params
        const singleObject = await Movie.findById(id)
        if (singleObject) {
            return res.json(singleObject)
        }
        return res.status(404).send(`that Bicycle doesn't exist`)
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
            return res.status(404).send(`That Bicycle doesn't exist`)
        }
        return res.status(500).send(error.message);
    }
}

const createMovie = async (req, res) => {
    try {
        const newObject = await new Movie(req.body)
        await newObject.save()
        return res.status(201).json({
            newObject,
        });
    } catch (error) {
        // if (error.name === 'CastError' && error.kind === 'ObjectId') {
        //     return res.status(404).send(`That Bicycle doesn't exist`)
        // }
        return res.status(500).json({ error: error.message })
    }
}

const updateMovie = async (req, res) => {
    try {
        let { id } = req.params;
        let changedObject = await Movie.findByIdAndUpdate(id, req.body, { new: true })
        if (changedObject) {
            return res.status(200).json(changedObject)
        }
        throw new Error("Bicycle not found and can't be updated")
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
            return res.status(404).send(`That Bicycle doesn't exist`)
        }
        return res.status(500).send(error.message);
    }
}

const deleteMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const erasedObject = await Movie.findByIdAndDelete(id)
        if (erasedObject) {
            return res.status(200).send("Bicycle deleted");
        }
        throw new Error("Bicycle not found and can't be deleted");
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
            return res.status(404).send(`That Bicycle doesn't exist`)
        }
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllMovies,
    getMovieById,
    updateMovie,
    deleteMovie,
    createMovie
}