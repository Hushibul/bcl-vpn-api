const dotenv = require('dotenv');
const express = require('express');

const errorHandler = require('./middlewares/errorHandler');
const Routes = require('./routes/router');

dotenv.config();

const app = express();
app.use(express.json());

app.set('view engine', 'ejs');

app.use('/api', Routes);

app.get('/api', (req, res) => {
  res.render('index');
});

app.listen(process.env.PORT, () =>
  console.log(`Server is running at ${process.env.PORT}`)
);

//Error Middleware
app.use(errorHandler);
