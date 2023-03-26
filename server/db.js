const mongoose = require('mongoose');

let connection = null;

async function connect() {
  if (connection) {
    return connection;
  }

  connection = await mongoose.connect('mongodb://localhost:27017/nature-nest', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  return connection;
}

module.exports = { connect };
