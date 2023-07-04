const express = require('express');
const app = express();
const cors = require('cors');
// const { default: mongoose } = require('mongoose');
require('dotenv').config()



// Middleware Connections
app.use(cors())
app.use(express.json())


// Routes

app.post('/v1/update',(req, res) => {
    setTimeout(() => {
        console.log(req.body);
        res.status(200).json(req.body);
    },3000);
})

app.get('/', (req, res) => {
    res.json(req.body);
});


// Connection
const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log('App running in port ' + PORT);
})