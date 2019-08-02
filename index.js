const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require("body-parser")
const jsonParser = bodyParser.json()
require("./db.js")
let port;

//const port = process.env.PORT || 4000.
if(!process.env.PORT){
     port = 5000
}else{
     port = process.env.PORT
}
   
console.log("Api server on port", port)
app.get('/', (req, res) => res.send('Server running'))

app.listen(port, () => `Listening on port ${port}`)
app.use(cors())
app.use(jsonParser)