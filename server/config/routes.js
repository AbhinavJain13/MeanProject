var session = require('./../controllers/session.js');
var ques = require('./../controllers/questions.js');
var ans = require('./../controllers/answers.js');

module.exports = function(app){
	app.post('/user/login', function(req, res){
		session.logReg(req, res)
	})
	app.get('/logout', function(req, res){
		session.logout(req, res)
	})
	app.get('/user/checksess', function(req, res){
		session.checkSess(req, res);
	});

	app.post('/user/ques', function(req,res){
		ques.addQues(req,res);
	});

	app.get('/ques/all', function(req,res){
		ques.index(req, res);
	});

	app.post('/user/ans', function(req,res){
		ans.addAns(req,res);
	});




}
