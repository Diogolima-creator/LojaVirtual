const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use('/', express.static(path.join(__dirname, 'src')))

require('./app/controllers/authController')(app);
require('./app/controllers/index')(app);

app.listen(9999, () => {
    console.log('server up at 9999')
});