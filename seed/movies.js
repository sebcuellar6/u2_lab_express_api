const db = require('../db')
const { Movie } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const resetCollections = async () => {
    try {
        await Movie.deleteMany({});
        
        console.log('All collection reset');
    } catch (error) {
        console.error('Error resetting collections:', error);
    }
};

const main = async () => {
    
resetCollections()

    const movies = [
    {
        title: "Independance Day",
        runTimeMinutes: 145,
        rating: 10,
        yearReleased: 1996,
        description: "In the epic adventure film Independence Day, strange phenomena surface around the globe. The skies ignite. Terror races through the world's major cities. As these extraordinary events unfold, it becomes increasingly clear that a force of incredible magnitude has arrived; its mission: total annihilation over the Fourth of July weekend. The last hope to stop the destruction is an unlikely group of people united by fate and unimaginable circumstances."
    },
    {
        title: "The Book of Eli",
        runTimeMinutes: 112,
        rating: 10,
        yearReleased: 2010,
        description: "Thirty years after war turned the world into a wasteland, a lone warrior named Eli (Denzel Washington) marches across the ruined landscape, carrying hope for humanity's redemption. Only one other man (Gary Oldman) understands the power of what Eli carries, and he is determined to take it for himself. Though Eli prefers peace, he will risk death to protect his precious cargo, for he must fulfill his destiny to help restore mankind." 
    },
    {
        title: "Django Unchained",
        runTimeMinutes: 165,
        rating: 8,
        yearReleased: 2012,
        description: "Two years before the Civil War, Django (Jamie Foxx), a slave, finds himself accompanying an unorthodox German bounty hunter named Dr. King Schultz (Christoph Waltz) on a mission to capture the vicious Brittle brothers. Their mission successful, Schultz frees Django, and together they hunt the South's most-wanted criminals. Their travels take them to the infamous plantation of shady Calvin Candie (Leonardo DiCaprio), where Django's long-lost wife (Kerry Washington) is still a slave." 
    },
    {
        title: "Holes",
        runTimeMinutes: 120,
        rating: 9,
        yearReleased: 2003,
        description: "The 2003 movie Holes, based on the book written by Louis Sachar, follows 14-year-old Stanley Yelnats's experience with the juvenile justice system. Stanley is wrongfully accused of stealing from a homeless shelter because he cannot afford decent legal representation. Stanley is sentenced to Camp Green Lake." 
    },
    {
        title: "Mission Impossible",
        runTimeMinutes: 110,
        rating: 7,
        yearReleased: 1996,
        description: "Tom Cruise plays a spy who is falsely accused of betrayal to his organization and finds himself working with some unlikely partners to track down the real mole in the system and expose him and clear his name. Now, this is a plot as old as the hills and Mission: Impossible works with it just as well as the others." 
    }         
]
   
await Movie.insertMany(movies)
console.log('added movies')

}

const run = async () => {
    await main()
    db.close()
}

run()