import request from 'supertest';
import app from '../app.js';

describe('POST /bookings', () => {
  it('should return 400 for missing fields', async () => {
    const res = await request(app).post('/bookings').send({});
    expect(res.statusCode).toBe(400);
    expect(res.body.success).toBe(false);
  });
});
