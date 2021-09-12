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
                title: "KreinkesBakedGoods.com",
                type:['Web Design', 'Web Development', 'Logo Design'],
                description: 'Cupcakes and cakes!',
                link: 'http://www.kreinkesbakedgoods.com',
            })

            const proj2 = new Project({
                title: "stonekingrealestateteam.com",
                type:['Web Design', 'Web Development'],
                description: 'Real Estate simple contact form site',
                link: 'http://www.stonekingrealestateteam.com',
            })

            try{
                await proj.save();
            } catch(e){
                console.log(e);
            }

            res.json({proj})
            
        });

        app.listen(port, () => {
            console.log(`Server is listening on port: ${port}`);
        });
    });


