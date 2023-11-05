const express = require('express');

const errorHandler = require('./middlewares/errorHandler');
const Routes = require('./routes/router');

const PORT = 5000;

const app = express();
app.use(express.json());

app.set('view engine', 'ejs');

app.use('/api', Routes);

app.get('/api', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));

//Error Middleware
app.use(errorHandler);
