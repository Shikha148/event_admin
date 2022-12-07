const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const feedSchema = new Schema({

    email: {type: String},
    star: {type: String},
    description: {type: String}

},

{timestamps: true});

const Feed = mongoose.model('Feed',feedSchema);

module.exports = Feed;