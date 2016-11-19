var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema =  new mongoose.Schema({
	name: {type :String, minlength: [3, 'should be atleast 3 characters long'],
	maxlength: [20, 'Should be less than 20 characters'], required: [true, 'Name is required'],
	unique: true},
	_ans: [{type: Schema.Types.ObjectId, ref: 'Ans'}],
	_ques: [{type: Schema.Types.ObjectId, ref: 'Que'}]
}, {timestamps:true})

mongoose.model('User', UserSchema);
