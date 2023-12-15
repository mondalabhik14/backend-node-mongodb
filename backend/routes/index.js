var express = require('express');
const userModel = require("./users");
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
 const createUser = await userModel.create({
    username: "Arunima_1234",
    name: "Arunima Saha",
    age: 19
  },{
    username: "Abantika_1234",
    name: "Abantika Saha",
    age: 19
  })
  res.send(createUser)
});

router.get('/finduser', async function(req, res, next) {
  let alluser = await userModel.find();
  res.send(alluser)
});


router.get('/findone', async function(req, res, next) {
  let alluser = await userModel.findOne({name: "Abhik Mondal"});
  res.send(alluser)
});

router.get('/delete', async function(req, res, next) {
  let alluser = await userModel.findOneAndDelete({age: 18});
  res.send(alluser)
});


module.exports = router;
