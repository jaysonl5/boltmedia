const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    title: String,
    type: [],
    description: String,
    link: String
})

let Project = mongoose.model("Project", projectSchema);

exports.Project = Project;