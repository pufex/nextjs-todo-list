import mongoose from "mongoose"

const connection: {isConnected?: boolean} = {}

async function dbConnect() {
    if(connection.isConnected){
        return
    }
    try{
        const uri = process.env.MONGO_URI as string
        const db = await mongoose.connect(uri)
        connection.isConnected = db.connections[0].readyState === 1
    }catch(err){
        throw err
    }
}

export default dbConnect