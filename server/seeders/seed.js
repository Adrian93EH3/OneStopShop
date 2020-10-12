let mongoose = require("mongoose");
let db = require("..models/");

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/Project-3',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

const productSeed = [
    {

    },
    {

    }
]

db.Products.deleteMany({})
    .then(() => db.Products.collection.insertMany(productSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    })