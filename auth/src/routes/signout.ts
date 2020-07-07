import express from 'express';

const router = express.Router();

router.post('/api/users/signout', () => {
  console.log('Hi there!');
});

export { router as signoutrouter };
