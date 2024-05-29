const { Actor } = require('../models')

const getAllActors = async (req, res) => {
    try {
        const objectArray = await Actor.find()
        res.json(objectArray)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getActorById = async (req, res) => {
    try {
        const { id } = req.params
        const singleObject = await Actor.findById(id)
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

const createActor = async (req, res) => {
    try {
        const newObject = await new Actor(req.body)
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

const updateActor = async (req, res) => {
    try {
        let { id } = req.params;
        let changedObject = await Actor.findByIdAndUpdate(id, req.body, { new: true })
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

const deleteActor = async (req, res) => {
    try {
        const { id } = req.params;
        const erasedObject = await Actor.findByIdAndDelete(id)
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
    getAllActors,
    getActorById,
    updateActor,
    deleteActor,
    createActor
}