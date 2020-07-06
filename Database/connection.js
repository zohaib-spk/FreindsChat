const mongoose = require('mongoose');

require('dotenv/config');

mongoose.connect(
    process.env.DB_Connection,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    },
    () => console.log("mongodb connected")
);

module.exports = mongoose;