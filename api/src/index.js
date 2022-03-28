import express from 'express';
import './db.js';
import apiRoutes from './routes/api.routes.js';

const app = express();

app.use(express.json());
app.use(express.static('../app/build'))

app.get('/', (req, res) => res.json({ 'msg': 'Welcome to shortLink' }));

app.use('/api', apiRoutes);

app.listen(process.env.PORT, console.log('Server started on port ' + process.env.PORT));

export default app;