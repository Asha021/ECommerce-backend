import mongoose from "mongoose";

const ConnectDb = () => {
    try {
        const conn = mongoose.connect(process.env.MONGO_URI);
        console.log(`mongodb is conneted ${conn.connection.host} `)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1);
    }
}

export default ConnectDb;
