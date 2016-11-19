var mongoose = require('mongoose');
var User = mongoose.model('User');
var Que = mongoose.model('Que');
var Ans = mongoose.model('Ans');

module.exports=(function(){
  return{
    addQues: function(req,res){
			var que = new Que(req.body);
      que._user = req.session.user._id;
			que.save(function(err, data){
				if(err){
					res.json(err);
				}
				else{
					res.json(data);
				}
			})
		},


    index: function(req,res){
        Que.find({})
        .populate('_user')
        .populate('_ans')
        .exec(function(err, data){
          Que.populate(data, {path:'_ans._user', model: 'User'}, function(err, results){
          res.json(data);
          console.log(data);

        });
    })



}
}
})();
