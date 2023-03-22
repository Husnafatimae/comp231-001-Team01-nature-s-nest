const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { Plant, User, Order } = require('./models/models');
const { connect } = require('./db')

const app = express();
const port = 3000;

async function start() {
    await connect();
    app.listen(port, () => {
        console.log(`Server listening at http://localhost:${port}`);
      });
      
}
// mongoose.connect('mongodb://localhost:27017/ecommerce', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

app.use(bodyParser.json());

// GET all plants
app.get('/plants', async (req, res) => {
  try {
    const plants = await Plant.find({});
    res.send(plants);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// GET a single plant
app.get('/plants/:id', async (req, res) => {
  try {
    const plant = await Plant.findById(req.params.id);
    if (!plant) {
      res.status(404).send('Plant not found');
    } else {
      res.send(plant);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// POST a new plant
app.post('/plants', async (req, res) => {
  try {
    const plant = new Plant(req.body);
    await plant.save();
    res.send(plant);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// PUT update a plant
app.put('/plants/:id', async (req, res) => {
  try {
    const plant = await Plant.findById(req.params.id);
    if (!plant) {
      res.status(404).send('Plant not found');
    } else {
      plant.set(req.body);
      await plant.save();
      res.send(plant);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// DELETE a plant
app.delete('/plants/:id', async (req, res) => {
  try {
    const plant = await Plant.findByIdAndDelete(req.params.id);
    if (!plant) {
      res.status(404).send('Plant not found');
    } else {
      res.send(plant);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

start();