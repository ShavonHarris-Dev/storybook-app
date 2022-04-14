const mongoose = require('mongoose')
// create a Schema
// the things we'll get back from Google


const StorySchema = new mongoose.Schema({
    title: {
        type:String,
        required:true,
        trim: true
    },
    body: {
        type:String,
        required:true
    },
    status: {
        type:String,
        default: 'public',
        enum:['public', 'private']
        // list of possible values
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },

})

module.exports = mongoose.model('Story', StorySchema)