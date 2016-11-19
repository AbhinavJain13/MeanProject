var mongoose = require('mongoose');
var User = mongoose.model('User');
var Que = mongoose.model('Que');
var Ans = mongoose.model('Ans');

module.exports = (function(){
	return{
		logReg: function(req, res){
			User.findOne({name: req.body.name}, function(err, user){


				if(!user){
					var user = new User(req.body);
					user.save(function(err,user){
						if(err){
							res.json(err);
						}
						else{
							req.session.user = user;
							req.session.save()
							res.json({data: req.session.user, status: true})
						}
					})
				}
				else{
					req.session.user = user;
					req.session.save()
					res.json({data: req.session.user, status: true})
				}
			})
		},

		logout: function(req, res){
			req.session.destroy()
			res.redirect('/')

		},

		checkSess: function(req, res){
			if(req.session.user){
				res.json(req.session.user)
			}else{
				res.send(null)
			}
		},




	}
})();
