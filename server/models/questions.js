var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var QueSchema = new mongoose.Schema({
	_user: {type: Schema.Types.ObjectId, ref: 'User'},
	ques : {type: String, required: [true, 'question is needed'], minlength: [10, 'Should be greater than 10 characters']},
  des: {type:String},
  _ans: [{type: Schema.Types.ObjectId, ref: 'Ans'}],
}, {timestamps: true});
mongoose.model('Que', QueSchema);
