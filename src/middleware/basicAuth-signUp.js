'use strict'
module.exports = (req,res,next)=>{
    if (req.query.name == undefined) {
        next('opps, there is an error')
    } else{
        res.status(200).json({ name: req.query.name})
    }
}
