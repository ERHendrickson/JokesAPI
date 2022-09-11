const mongoose = require('mongoose')
const database = 'jokes2022';

mongoose.connect(`mongodb://localhost/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`established a connection to the database: ${database}`))
    .catch(err => console.log('something went wrong when connecting to the database', err));