const Joke = require("../models/jokes.model");

//---------------------FIND ALL----------------
module.exports.showAllJokes = (req, res) => {
    Joke.find()
    .then(foundJokes => {
        res.json({results: foundJokes})
    })
    .catch(err => {
        res.jason({message: "Something went wrong with query", error: err})
    })
}

//---------------------FIND ONE----------------
module.exports.findOneJoke = (req,res) => {
    Joke.findOne({_id:req.params.id})
    .then((foundJoke) => {
        res.json({results: foundJoke })
    })
    .catch(err => {
        res.json({message: "Something went wrong with query", error: err})
    })
}

//---------------------CREATE JOKE-------------
module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
    .then(newJoke => {
        res.json({results: newJoke})
    })
    .catch(err =>{
        res.json({message: "Something went wrong", error:err})
    })
}

//---------------------UPDATE JOKE-------------
module.exports.updateJoke = (req,res) => {
    Joke.findOneAndUpdate(
        {_id:req.params.id},
        req.body,
        {new:true, runValidators: true}
    )
    .then(updateJoke => {
        res.json({results: updateJoke})
    })
    .catch(err => {
        res.json({message: "Something went wrong", error:err})
    })
}

//---------------------DELETE JOKE------------
module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
    .then(deletedJoke => {
        res.json({results: deletedJoke})
    })
    .catch(err=>{
        res.json({message: "Something went wrong", error: err})
    })    
}