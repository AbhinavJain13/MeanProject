var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var AnsSchema = new mongoose.Schema({
	_user: {type: Schema.Types.ObjectId, ref: 'User'},
	_ques:{type: Schema.Types.ObjectId, ref: 'Que'},
	ans:{type: String, required:true ,minlength: [5, 'Should be greater than 5 characters']},
  details: {type: String},
}, {timestamps:true});

mongoose.model('Ans', AnsSchema);
