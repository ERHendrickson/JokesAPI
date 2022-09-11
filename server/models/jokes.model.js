const mongoose  = require("mongoose");

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        require: [true, "every joke needs a setup"]
    },
    punchline: {
        type: String,
        require: [true, "every joke needs a punchline"]
    }
})

const Joke = mongoose.model('joke', JokeSchema);
module.exports = Joke;