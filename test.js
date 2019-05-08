//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://aaroncpotts:sun.shine1@cluster0-azzzi.mongodb.net/local_library?retryWrites=true';
mongoose.connect(mongoDB, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var Book = require('./models/book');
var Author = require('./models/author');
var Genre = require('./models/genre');
var BookInstance = require('./models/bookinstance');

async function derp(){
  Book.find(function(err,books){
    if(err)
    return console.error(err)
    console.log(books);
  })
}

db.once('open',function(){
  console.log("connected");
  derp();
})
