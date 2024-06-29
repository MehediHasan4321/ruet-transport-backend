const morgan = require('morgan')
const express = require('express')
const cors = require('cors')

const applyMiddleware = (app)=>{
    app.use([morgan("dev"), cors(), express.json()]);
}

module.exports=applyMiddleware