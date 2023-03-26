const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../server');
const { Plant } = require('../models/models');
const { connect } = require('../db')

describe('Plant API', () => {
  beforeAll(async () => {
    await connect();
  });

  afterEach(async () => {
    await Plant.deleteMany({});
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  describe('GET /plants', () => {
    it('should return all plants', async () => {
      const plants = [
        { name: 'Plant 1', description: 'Description for Plant 1' },
        { name: 'Plant 2', description: 'Description for Plant 2' },
      ];

      await Plant.create(plants);

      const response = await request(app).get('/plants');

      expect(response.status).toBe(200);
      expect(response.body.length).toBe(2);
      expect(response.body[0].name).toBe('Plant 1');
      expect(response.body[1].name).toBe('Plant 2');
    });
  });

  describe('POST /plants', () => {
    it('should create a new plant', async () => {
      const plant = { name: 'New Plant', description: 'Description for New Plant' };

      const response = await request(app).post('/plants').send(plant);

      expect(response.status).toBe(200);
      expect(response.body.name).toBe('New Plant');

      const dbPlant = await Plant.findById(response.body._id);
      expect(dbPlant.name).toBe('New Plant');
    });
  });

  describe('PUT /plants/:id', () => {
    it('should update an existing plant', async () => {
      const plant = { name: 'Existing Plant', description: 'Description for Existing Plant' };
      const createdPlant = await Plant.create(plant);

      const updatedPlant = { name: 'Updated Plant', description: 'Description for Updated Plant' };
      const response = await request(app).put(`/plants/${createdPlant._id}`).send(updatedPlant);

      expect(response.status).toBe(200);
      expect(response.body.name).toBe('Updated Plant');

      const dbPlant = await Plant.findById(createdPlant._id);
      expect(dbPlant.name).toBe('Updated Plant');
    });
  });

  describe('DELETE /plants/:id', () => {
    it('should delete an existing plant', async () => {
      const plant = { name: 'Plant to be deleted', description: 'Description for Plant to be deleted' };
      const createdPlant = await Plant.create(plant);

      const response = await request(app).delete(`/plants/${createdPlant._id}`);

      expect(response.status).toBe(200);

      const dbPlant = await Plant.findById(createdPlant._id);
      expect(dbPlant).toBeNull();
    });
  });
});
