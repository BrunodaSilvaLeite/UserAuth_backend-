const mongoose = require('mongoose');
mongoose.connect(`mongodb:${ process.env.MONGO_LOCALHOST}`);
mongoose.Promise = global.Promise;

module.exports= mongoose;