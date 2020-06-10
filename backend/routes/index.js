var express = require('express');
var router = express.Router();
const Transaction = require ('../models/transaction.js')
const mongoose = require('mongoose')

router.post("/transaction", (request, response) => {
  const transaction = new Transaction({
    _id : mongoose.Types.ObjectId(),
    type : request.body.type,
    amount : request.body.amount,
    description : request.body.description,
  })
  
  transaction.save().then(result=>{
    return response.json({'data':result,'success':true});
  }).catch(err=> console.log(err))
  
});



router.get("/transaction", (request, response) => {
  Transaction.find({}).sort({date:1}).then(result => {
      return response.json({'data':result,'success':true});
  }).catch(err=> response.status(500).send(err));
});

router.get("/remove", (request, response) => {
  Transaction.remove({}).then((error, result) => {
      if(error) {
          return response.status(500).send(error);
      }
      return response.json({'data':result,'success':true});
  });
});

module.exports = router;
