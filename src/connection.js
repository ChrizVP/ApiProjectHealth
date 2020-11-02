const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://chrisvp:summer9620@cluster0.3nkri.mongodb.net/ProjectHealthDB?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true

}).then(db => console.log('Connection establishe successfully'))