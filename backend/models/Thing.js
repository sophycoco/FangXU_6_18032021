const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
    userId: { type: String, require: true },
    name: { type: String, required: true },
    manufacturer: { type: String, require: true },
    descriptiion: { type: String, require: true },
    mainPeper: { type: String, require: true },
    imageUrl: { type: String, require: true },
    heat: { type: Number, require: true },
    likes: { type: Number, require: true },
    dislikes: { type: Number, require: true },
    usersLiked: { type: ["String<userId>"], require: true },
    usersDislikes: { type: ["String<userId>"], require: true },
});

module.exports = mongoose.model('Thing', thingSchema);