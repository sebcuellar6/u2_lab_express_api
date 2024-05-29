const db = require('../db')
const { Actor } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const resetCollections = async () => {
    try {
        await Actor.deleteMany({});
        
        console.log('All collection reset');
    } catch (error) {
        console.error('Error resetting collections:', error);
    }
};

const main = async () => {
    
    resetCollections()
    
        const actors = [
        {
        movie_id: '6657832f284e8e1653cedc8a',
        name: 'Tom Cruise',
        age: 65,
        isAlive: true
        },
        {
        movie_id: '6657832f284e8e1653cedc88',
        name: 'Jamie Foxx',
        age: 58,
        isAlive: true
        },
        {
        movie_id: '6657832f284e8e1653cedc87',
        name: 'Denzel Washington',
        age: 67,
        isAlive: true 
        },
        {
        movie_id: '6657832f284e8e1653cedc89',
        name: 'Shia LaBeouf',
        age: 37,
        isAlive: true
        },
        {
        movie_id: '6657832f284e8e1653cedc89',
        name: 'Khleo Thomas',
        age: 35,
        isAlive: true
        },
        {
        movie_id: '6657832f284e8e1653cedc89',
        name: 'Dule Hill',
        age: 49,
        isAlive: true
        },
        {
        movie_id: '6657832f284e8e1653cedc89',
        name: 'Khleo Thomas',
        age: 35,
        isAlive: true
        },
        {
        movie_id: '6657832f284e8e1653cedc86',
        name: 'Will Smith',
        age: 55,
        isAlive: true
        },
        {
        movie_id: '6657832f284e8e1653cedc86',
        name: 'Jeff Goldbloom',
        age: 71,
        isAlive: true
        },
        {
        movie_id: '6657832f284e8e1653cedc87',
        name: 'Mila Kunis',
        age: 40,
        isAlive: true 
        },
                 
    ]
       
    await Actor.insertMany(actors)
    console.log('added actors')
    
    }
    
    const run = async () => {
        await main()
        db.close()
    }
    
    run()