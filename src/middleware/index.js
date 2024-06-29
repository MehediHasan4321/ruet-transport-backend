const morgan = require('morgan')
const express = require('express')
const cors = require('cors')
const swaggerUI = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerDocs = YAML.load('./swagger.yaml')




const applyMiddleware = (app)=>{
    app.use([morgan("dev"), cors(), express.json()]);
    app.use('/docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs))
}

module.exports=applyMiddleware