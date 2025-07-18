import request from 'supertest';
import app, { startServer } from '../app.js';

beforeAll(async () => {
  await startServer();
});

describe('POST /new', () => {
  it('should add a new vehicle', async () => {
    const res = await request(app).post('/new').send({
      name: "Test Truck",
      capacitykg: 800,
      tyres: 6
    });

    console.log(res.statusCode, res.body); 
    expect(res.statusCode).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data.name).toBe("Test Truck");
  });
});
