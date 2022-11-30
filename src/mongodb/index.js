const mongoose = require('mongoose')
const signale = require('signale')


mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
}).then(
    signale.success('connected to MongoDB')
).catch((error)=> console.log(error));