const express = require('express');
const app = express();
const cors = require("cors")

var corsOption = {
    origin: "http://localhost:8010"
}

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors(corsOption))

const db = require("./src/models")
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected with the database")
    })
    .catch(err => {
        console.log("Cannot connect to the database", err)
        process.exit()
    })


app.set('port', process.env.PORT || 3000) 

app.get('/', (req, res, next) => {
    res.send('<h1>Hello world<h1>');
})

app.listen(app.get('port'), () => {
    console.info(`Server listen on port ${app.get('port')}`);
})