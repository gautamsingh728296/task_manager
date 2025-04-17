const mongoose = require('mongoose');
// Define the model
const uri = "mongodb+srv://bookStore:2z1z5YybpTs0XtxJ@cluster0.e8qt4es.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Connect to MongoDB
mongoose.connect(uri, {
  // useNewUrlParser: false,
  // useUnifiedTopology: false,
  // useCreateIndex: false,
  // useFindAndModify: false
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});



// Define the schema
const bookSchema = new mongoose.Schema({
  username: {
    type: String,
    // required: true,
    // unique: true
  },
  email: {
    type: String,
    // required: true
  },
  password: {
    type: String,
    // required: true
  }
  // createdAt: {
  //   type: Date,
  //   default: Date.now
  // }
},{timestamps:true});
const userCrud = mongoose.model('userCrud', bookSchema);


module.exports = userCrud;
