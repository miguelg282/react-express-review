//=============expressjs.com docs > getting started===========
const express = require('express'); 
const port = 3000;
const app = express();
const path = require('path');
const router = require('./router');

//=======import package json dependencies.=========
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

//========app.use dependencies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); //
app.use(morgan('dev')); // generates logs when requests are made
app.use(cors()); //security
app.use('/api', router);


//=========expressjs Getting Started, Hello World & static files.
app.get('/name', (req, res) => res.send('Miguel is The Greatest!!!'));
app.use('/', express.static(path.join(__dirname, '../client/dist')))
app.listen(port, () => console.log(`server listening on Andre${port}!!!`));



