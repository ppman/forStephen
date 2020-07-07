import express from 'express';

const router = express.Router();

router.get('/api/users/currentuser', () => {
  console.log('Hi there!');
});

export { router as currentUserRouter };
