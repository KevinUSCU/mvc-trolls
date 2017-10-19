const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.disable('x-provided-by')

const bodyParser = require('body-parser')
app.use(bodyParser.json())
const morgan = require('morgan')
app.use(morgan('dev'))








const listener = () => console.log(`Listening on port ${port}`)
app.listen(port, listener)

module.exports = app