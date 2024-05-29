const db = require('../db')
const { Review } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const resetCollections = async () => {
    try {
        await Review.deleteMany({});
        
        console.log('All collection reset');
    } catch (error) {
        console.error('Error resetting collections:', error);
    }
};

const main = async () => {
    
    resetCollections()
    
        const reviews = [
    {
        movie_id: '6657832f284e8e1653cedc86',
        score: 8, 
        comment: 'Great movie lots of suspenseful action!'
    },
    {
        movie_id: '6657832f284e8e1653cedc86',
        score: 5, 
        comment: 'Not a huge fan of it..'
    },
    {
        movie_id: '6657832f284e8e1653cedc87',
        score: 10, 
        comment: 'Book of Eli is the best post-apocalyptic movie of its time!'
    },
    {
        movie_id: '6657832f284e8e1653cedc87',
        score: 10, 
        comment: 'Denzel never seems to dissappoint.'
    },
    {
        movie_id: '6657832f284e8e1653cedc88',
        score: 10, 
        comment: 'This movie is the best thing since the turn of the century!'
    },
    {
        movie_id: '6657832f284e8e1653cedc88',
        score: 8, 
        comment: 'Good movie but i was not a fan of all the racial slurs. Im sensitive and this hurt my feelings even though it shouldnt.'
    },
                 
    ]
       
    await Review.insertMany(reviews)
    console.log('added reviews')
    
    }
    
    const run = async () => {
        await main()
        db.close()
    }
    
    run()