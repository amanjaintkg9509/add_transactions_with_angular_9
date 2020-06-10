const mongoose = require('mongoose')

const transactionSchema = mongoose.Schema ({
    type : {type:String,require:true},
    amount : {type:String,require:true},
    description : {type:String,require:true}
},{
    timestamps : true
})
module.exports = mongoose.model('Transaction', transactionSchema);