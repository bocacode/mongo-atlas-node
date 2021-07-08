const mongoose = require('mongoose')

mongoose
  .connect('mongodb+srv://jonathans:Jsanch08!!@cluster0.gznq6.mongodb.net/test', { useNewUrlParser: true })
  .then(() => console.log('We are connected to Mongo....'))
  .catch(err => console.log('Could not connect to MongoDb', err))

  
