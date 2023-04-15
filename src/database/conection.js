import mongoose from 'mongoose';


const dbConnection = async () => {

    try {
        await mongoose.connect(process.env.MONGO_CNN);
        console.log(`DB connected to ${mongoose.connection.name}`);
    } catch (error) {
        console.log(error);
    }

}


export {
    dbConnection,
}