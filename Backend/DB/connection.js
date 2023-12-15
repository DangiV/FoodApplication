import mongoose from "mongoose"

const connection = async () => {
    const uri = 'mongodb+srv://vikasaurasoft:foodapplication@cluster0.kixdbb4.mongodb.net/foodapp'
    await mongoose.connect(uri).then((success => {
        console.log('data base connected successfully');
    })).catch((error => {
        console.log(error);
    }))
}

export default connection;