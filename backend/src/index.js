import express from 'express';
import './db.js';
import * as apiCtrl from './controllers/short.controller.js';

const app = express();

app.use(express.json());
app.use(express.static('../frontend/build'))

app.get('/', (req, res) => res.json({ 'msg': 'Welcome to shortLink' }));

app.post('/api/shorten', apiCtrl.shortLink)
app.get('/:id', apiCtrl.getShortLink)

app.listen(process.env.PORT, console.log('Server started on port ' + process.env.PORT));

export default app;