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

app.use(express.static(path.join(__dirname, "client", "public")));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, "client", "public", "index.html"));
})

mongoose
	.connect(process.env.DB_URL, { useNewUrlParser: true })
	.then(() => {

        // contact form routes

        const sendRouter = require('./routes/send');
        app.post('/send', sendRouter);

        // project list
        app.use('/projects', bodyParser.urlencoded({extended: true}))

        app.post('/projects', async (req, res) => {
            console.log("HEY!")
            const Kreinkes = new Project({
                title: "Kreinke's Baked Goods Brand",
                type:'Brand',
                img: 'kreinke.png',
                description: 'Logo and Brand development for local cupcake business.',
                link: 'http://www.kreinkesbakedgoods.com',
                tech: [{
                        title: "Adobe Illustrator",
                        icon: 'fas fa-pen-nib',
                        color: "#ff8533"
                    }]
            })

            const Stoneking = new Project({
                title: "Stoneking Real Estate Team",
                type:'Web',
                img: 'stoneking.png',
                description: 'Simple one page site with contact form for Real Estate team.',
                link: 'http://www.stonekingrealestateteam.com',
                tech: [
                    {
                        title: "react",
                        icon: 'fab fa-react',
                        color: '#61DBFB'
                    },
                    {
                        title: "nodejs",
                        icon: 'fab fa-node',
                        color: '#68A063'
                    }
                ]
            })

            const WeatherZip = new Project({
                title: "WeatherZip",
                type:'Web',
                img: 'weatherzip.png',
                description: 'App to provide weather based on zip code.',
                link: 'https://weatherzip.herokuapp.com/',
                tech: [
                    {
                        title: "Adobe Illustrator",
                        icon: 'fas fa-pen-nib',
                        color: '#ff8533'
                    },
                    {
                        title: "react",
                        icon: 'fab fa-react',
                        color: '#61DBFB'
                    },
                    {
                        title: "node.js",
                        icon: 'fab fa-node',
                        color: '#68A063'
                    }
                ]
            })

            const DreamTeam = new Project({
                title: "OKC Dream Team Brand",
                type:'Brand',
                img: 'dt.png',
                description: 'Logo re-design for Oklahoma City Thunder podcast OKC Dream Team',
                link: 'https://www.patreon.com/OKCDreamTeam',
                tech: [{
                    title: "Adobe Illustrator",
                    icon: 'fas fa-pen-nib',
                    color: '#ff8533'
                }]
            })

            const DNAS = new Project({
                title: "DNA Solutions",
                type:'Web',
                img: 'dnas.png',
                description: 'Web site front end re-design using bootstrap, css. Created and embedded a Shopify ecommerce solution for DNA test kits.',
                link: 'https://www.dnasolutionsusa.com',
                tech: [
                    {
                        title: "Bootstrap",
                        icon: 'fab fa-bootstrap',
                        color: "#553C7B"
                    },
                    {
                        title: "Css",
                        icon: 'fab fa-css3',
                        color: "#2965f1"
                    },
                    {
                        title: "Shopify",
                        icon: "fab fa-shopify"
                    }
                ]
            })

            const Grove = new Project({
                title: "Grove Energy, LLC.",
                type:'Brand',
                img: 'grove.png',
                description: 'Logo / Brand design for Oklahoma City based energy company.',
                link: 'https://www.groveenergyusa.com',
                tech: [{
                    title: "Adobe Illustrator",
                    icon: 'fas fa-pen-nib',
                    color: '#ff8533'
                }]
            })

            const Granted = new Project({
                title: "Granted Boutique",
                type:'Brand',
                img: 'granted.png',
                description: 'Logo / Brand design for an online boutique store.',
                link: 'https://www.facebook.com/grantedboutique',
                tech: [{
                    title: "Adobe Illustrator",
                    icon: 'fas fa-pen-nib',
                    color: '#ff8533'
                }]
            })

            const RockyPearl = new Project({
                title: "The Rocky Pearl",
                type:'Brand',
                img: 'rockypearl.png',
                description: 'Logo / Brand design for an online boutique store.',
                link: 'https://www.facebook.com/therockypearl',
                tech: [{
                    title: "Adobe Illustrator",
                    icon: 'fas fa-pen-nib',
                    color: '#ff8533'
                }]
            })

            const ThunderHeads = new Project({
                title: "ThunderHeads",
                type:'Brand',
                img: 'th.png',
                description: 'Logo / Brand design for an Oklahoma City Thunder Podcast / YouTube Show.',
                link: 'https://www.youtube.com/okcthunderheads',
                tech: [{
                    title: "Adobe Illustrator",
                    icon: 'fas fa-pen-nib',
                    color: '#ff8533'
                }]
            })



            try{
                await Kreinkes.save();
                await Stoneking.save();
                await WeatherZip.save();
                await DreamTeam.save();
                await DNAS.save();
                await Grove.save();
                await Granted.save();
                await RockyPearl.save();
                await ThunderHeads.save();
            } catch(e){
                console.log(e);
            }

            res.json({Kreinkes})
            
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


