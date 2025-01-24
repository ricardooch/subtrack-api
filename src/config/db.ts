import mongoose from 'mongoose'
import colors from 'colors'

export const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI)

        console.log(colors.cyan(`MongoDB connected on ${connection.connection.host}`))
    } catch (error) {
        console.log(colors.red(error.message))
        process.exit(1)
    }
}