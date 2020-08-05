import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);



app.listen(3333);

// app.get('/users', (request, response) => {
//   const users = [
//     { name: 'Thiago', age: 25 },
//     { name: 'Giovana', age: 21 },
//   ]
//   console.log("Access the route");
//   return response.json(users);
// });

// app.post('/users', (request, response) => {
//   console.log(request.body);

//   const users = [
//     { name: 'Thiago', age: 25 },
//     { name: 'Giovana', age: 21 },
//   ]
//   console.log("Access the route POST");
//   return response.json(users);
// });