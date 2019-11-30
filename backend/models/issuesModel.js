const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const issuesSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    createdby: {type: String, required: true},
    assigned: {type: String},
    status: {type: String}
},{
    timestamps: true
});

const Issues = mongoose.model('Issues', issuesSchema);

module.exports = Issues;

