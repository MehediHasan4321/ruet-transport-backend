require('dotenv').config()
const httt = require('http')
const {connectDB} = require('./db')
const app= require('./app')
const server = httt.createServer(app)



const port = process.env.PORT || 8000



const main = async()=>{
   try {
    await connectDB()
    server.listen(port,()=>{
        console.log(`Server is running on port ${port}`);
    })
   } catch (e) {
    console.log('Database error')
    console.log(e)
   }
}


main()