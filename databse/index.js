const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/amazon');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('mongo is connected'));

const descriptionSchema = mongoose.Schema({
  brand: String,
  name: String,
  stars: Number,
  reviews: Number,
  questions: Number,
  price: Number,
  color: String,
  size: String,
  weight: Number,
  text: String,
});

const Description = mongoose.model('Description', descriptionSchema);

module.exports = Description;