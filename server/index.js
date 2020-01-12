const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const router = require('./router');

const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); //
app.use(morgan('dev')); // generates logs when requests are made
app.use(cors()); //security
app.use('/api', router);

app.get('/name', (req, res) => res.send('Miguel is The Greatest!!!'));

app.use('/', express.static(path.join(__dirname, '../client/dist')))
app.listen(port, () => console.log(`server listening on Andre${port}!!!`));



