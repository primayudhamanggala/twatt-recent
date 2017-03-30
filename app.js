const express = require('express');
const app = express()


const twatt = require('./routes/twatt')

app.use('/twitter', twatt)

app.listen(3000)
