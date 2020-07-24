// models
require(`./models/User`)
require(`./models/Track`)

// setup
const express = require(`express`)
const mongoose = require(`mongoose`)
const bodyParser = require(`body-parser`)
const authRoutes = require(`./routes/authRoutes`)
const trackRoutes = require(`./routes/trackRoutes`)
const requireAuth = require(`./middlewares/requireAuth`)

const app = express()

app.use(bodyParser.json())
app.use(authRoutes)
app.use(trackRoutes)

const user = ``
const password = ``
const dbname = `test`
const mongoUri = `mongodb+srv://${user}:${password}@cluster0.9ujf7.mongodb.net/${dbname}?retryWrites=true&w=majority`
mongoose.connect(mongoUri, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
mongoose.connection.on(`connectd`, () => {
    console.log(`Connected to mongo instance`)
})
mongoose.connection.on(`error`, (err) => {
    console.error(`Error connecting to mongo`, err)
})

app.get(`/`, requireAuth, (req, res) => {
    res.send(`Your email: ${req.user.email}`)
})

app.listen(3000, () => {
    console.log(`Listening on port 3000`)
})