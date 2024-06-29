const {findAll} = require('../../../../services/bus')

const findAllItems =async (_req,res,next)=>{
    try {

        const buses = await findAll()
        const response = {
            data:buses,
            status:200,
            message:'Success'
        }


        res.status(200).json(response)
    } catch (e) {
        next(e)
    }
}

module.exports=findAllItems