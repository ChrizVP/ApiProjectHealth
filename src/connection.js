const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/storedb', {
    useNewUrlPaerser: true,
    userUnifiedTopology: true,
    useCreateIndex: true
}).then(db => console.log('Connection establishe successfully'))