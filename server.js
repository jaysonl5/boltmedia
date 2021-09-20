const express = require('express')
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();
const {Project} = require('./schema/projects.js');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

// mongoose.connect(process.env.DB_URL);
// const connection = mongoose.connection;
// connection.once('open', ()=> {
//     console.log('MongoDB connection successful');
// })

app.use(express.static(path.join(__dirname, "client", "public")));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, "client", "public", "index.html"));
})

mongoose
	.connect(process.env.DB_URL, { useNewUrlParser: true })
	.then(() => {

        app.use('/projects', bodyParser.urlencoded({extended: true}))

        app.post('/projects', async (req, res) => {
            console.log("HEY!")
            const proj = new Project({
                title: "Kreinkes Baked Goods",
                type:'Brand',
                description: 'Cupcakes and cakes!',
                link: 'http://www.kreinkesbakedgoods.com',
            })

            const proj2 = new Project({
                title: "stonekingrealestateteam.com",
                type:'Web',
                description: 'Real Estate simple contact form site',
                link: 'http://www.stonekingrealestateteam.com',
            })

            const proj3 = new Project({
                title: "weatherzip",
                type:'Web',
                description: 'Weather by zip code',
                link: 'https://weatherzip.herokuapp.com/',
            })

            try{
                await proj.save();
                await proj2.save();
                await proj3.save();
            } catch(e){
                console.log(e);
            }

            res.json({proj})
            
        });

        app.get('/projects', async(req, res) => {
            const projects = await Project.find({});
            res.json({
                projects
            })
        })

        app.use('/projects/web', bodyParser.urlencoded({extended: true}))

        app.get('/projects/web', async(req, res) => {
            const projects = await Project.find({type: 'Web'});
            res.json({
                projects
            })
        })

        app.use('/projects/brand', bodyParser.urlencoded({extended: true}))

        app.get('/projects/brand', async(req, res) => {
            const projects = await Project.find({type: 'Brand'});
            res.json({
                projects
            })
        })

        app.get('/projects/production', async(req, res) => {
            const projects = await Project.find({type: 'Production'});
            res.json({
                projects
            })
        })

        app.listen(port, () => {
            console.log(`Server is listening on port: ${port}`);
        });
    });


