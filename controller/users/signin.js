const { users } = require('../../models');
// const SHA256 = require("crypto-js/sha256");
// const fs = require('fs');

module.exports = {
  post: (req, res) => {
    // TODO : 유저가 로그인을 했을 때, 회원정보를 데이터베이스에서 확인하고, 회원의 id를 session에 담아주도록 구현하세요.
    let body = req.body;

    users.findOne({where: {
      email:body.email,
      password:body.password
    }}).then(function(data){
      if((data == null || data == undefined) === true){
        res.status(404).send('unvalid user');
        console.log("unvalid user");
      }else{
        // console.log(data.id);
        req.session.userid = data.id;
        res.status(200).json({
          id: data.id
        });
        
      }
    })
  }
};
