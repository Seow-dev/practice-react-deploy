const { users } = require('../../models');

module.exports = {
  post: (req, res) => {
    // TODO : 유저가 회원가입을 했을 때, 회원정보를 데이터베이스에 저장하도록 구현하세요.
    let body = req.body;

    users.findOne({where: {email:body.email}})
    .then(function(data){
      if((data == null || data == undefined) === false){
        res.status(409).send('Already exists user');
        console.log("Already exists user");
      }
      else{
        users.create({
          email:body.email,
          username: body.username,
          password: body.password
        })
        .then((data)=>{
          res.status(200).json(data);
        })
      }
    })
  }
};
