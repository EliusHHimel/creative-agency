const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient } = require('mongodb');
const fileUpload = require('express-fileupload');
var ObjectId = require('mongodb').ObjectID;

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(fileUpload());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.snmo5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function verifyToken(req, res, next) {
    if (req.headers.authorization.startsWith('Bearer ')) {
        const token = req.headers.authorization.split('Bearer ')[1];
        console.log(token);
        next();
    }
}

async function main() {
    try {
        await client.connect();
        const database = client.db('creativeAgency');
        const servicesCollection = database.collection('services');
        const ordersCollection = database.collection('orders');
        const usersCollection = database.collection('users');

        // GET services API
        app.get('/services', async (req, res) => {
            const cursor = servicesCollection.find({});
            const services = await cursor.toArray();
            res.send(services);
        })

        // POST services API
        app.post('/services', async (req, res) => {
            const title = req.body.title;
            const description = req.body.description;
            const price = req.body.price;
            const image = req.files.img.data;
            const encodedImage = image.toString('base64');
            const imageBuffer = Buffer.from(encodedImage, 'base64');
            const service = {
                title,
                description,
                price,
                image: imageBuffer
            }
            const result = await servicesCollection.insertOne(service);

            res.json(result)
        })
        // Delete service from service API
        app.delete('/services/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) }
            const result = await servicesCollection.deleteOne(query);
            res.json(result)
        })

        // POST user API
        app.post('/users', async (req, res) => {
            const newUser = req.body;
            const result = await usersCollection.insertOne(newUser);
            console.log('Hiting the post', req.body);
            res.json(result)
        })

        // Update users API
        app.put('/users', async (req, res) => {
            const user = req.body;
            const query = { email: user.email };
            const options = { upsert: true };
            const updatedUser = {
                $set: user
            };
            const result = await usersCollection.updateOne(query, updatedUser, options);
            res.json(result)
        })

        // GET Users API
        app.get('/users', async (req, res) => {
            const cursor = usersCollection.find({});
            const users = await cursor.toArray();
            res.send(users);
        })


    }
    finally {

    }
}

main().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Creative Agency Server Running')
})

app.listen(port, () => {
    console.log('Running server on port', port)
})
