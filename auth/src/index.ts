import express from 'express';
import { json } from 'body-parser';

//import { currentUserRouter } from './routes/current-user';
//import { signinRouter } from './routes/signin';
//import { signoutrouter } from './routes/signout';
//import { signupRouter } from './routes/signup';

const app = express();
app.use(json());

//app.use(currentUserRouter);
//app.use(signinRouter);
//app.use(signoutrouter);
//app.use(signupRouter);

app.get('/api/users/currentuser', (req, res) => {
  res.send('Hi there!');
});
app.listen(3000, () => {
  console.log('Listening on port 3000!!!!!!!!');
});
