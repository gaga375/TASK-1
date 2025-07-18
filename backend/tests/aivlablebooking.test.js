import request from 'supertest';
import app from '../app.js';

describe('GET /available', () => {
  it('should return 400 for missing query params', async () => {
    const res = await request(app).get('/available');
    expect(res.statusCode).toBe(400);
    expect(res.body.success).toBe(false);
  });
});
