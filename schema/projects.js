const mongoose = require('mongoose');


const projectSchema = mongoose.Schema({
    title: String,
    type: String,
    img: String,
    description: String,
    link: String,
    tech: [{
        title: String,
        icon: String,
        color: String
    }]
})

let Project = mongoose.model("Project", projectSchema);

exports.Project = Project;