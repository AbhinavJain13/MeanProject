
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Que = mongoose.model('Que');
var Ans = mongoose.model('Ans');



module.exports = (function(){
  return{
    addAns: function(req,res){
			var answ = new Ans(req.body);
      console.log(req.body);
      answ._user = req.session.user._id;
		  answ.save(function(err, data){
        if(err){
          console.log(err);
        }
  				else{
            Que.findOne({_id: answ._ques}, function(err,data){
              data._ans.push(answ._id);
              data.save(function(err, data){
                if(err){
        					res.json(err);
        				}
                else{
                  res.json(data);
                }
              })
            })
  				}
			})
		},



    }
  })();
