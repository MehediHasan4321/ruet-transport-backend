const {busCollection} = require('../../db/dbCollection')


const findAll = async()=>{
    const buses = await busCollection.find().toArray()
    
    return buses
}


module.exports = {
    findAll
}