const mongoose = require('mongoose')
require('dotenv').config()

const uri = "mongodb+srv://shahshreya591:N6VebAZXJpZVqZpf@cluster0.yt21u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log("Db connected")
})
