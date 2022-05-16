const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const { urlencoded, json } = require('body-parser')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

// app.get('/customer', (req, res) => {
//     const page = require("/controller" + req.originalUrl + "." + req.method + ".js")

//     return res.json("/controller" + req.method)

// })

app.listen(3030, () => {
    console.log('Lea Records running in http://localhost:3030');
    
})