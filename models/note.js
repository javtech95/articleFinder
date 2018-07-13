const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const noteSchema = new Schema({
    _headlineId: {
        type: Schema,Types,ObjectsID,
        ref: 'Headline'
    },
    date: String,
    noteText: String
});

const Headline = mongoose.model('Note', noteSchema);

module.exports = Note;