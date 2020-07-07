import express from 'express';

const router = express.Router();

router.post('/api/users/signin', () => {
  console.log('Hi there!');
});

export { router as signinRouter };
