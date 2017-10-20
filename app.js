const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.disable('x-provided-by')

const morgan = require('morgan')
app.use(morgan('dev'))
const bodyParser = require('body-parser')
app.use(bodyParser.json())

const trollsRoutes = require('./src/routes/trolls-routes')
app.use('/trolls', trollsRoutes)

app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).json({ error: err })
})

app.use((req, res, next) => {
  res.status(404).json({ error: { message: 'Not found' }})
})

const listener = () => console.log(`Listening on port ${port}`)
app.listen(port, listener)

module.exports = app