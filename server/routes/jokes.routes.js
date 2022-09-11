const JokeController = require("../controllers/jokes.controller")

module.exports = (app) => {
//------------------DISPLAY----------------
    app.get('/api/jokes', JokeController.showAllJokes);

//-----------------DISPLAY ONE-------------
    app.get('/api/jokes/:id', JokeController.findOneJoke);

//-----------------CREATE JOKE-------------
    app.post('/api/jokes', JokeController.createJoke);

//----------------UPDATE JOKE--------------
    app.put('/api/jokes/:id', JokeController.updateJoke);

//-----------------DELETE JOKE-------------
    app.delete('/api/jokes/:id', JokeController.deleteJoke);
}