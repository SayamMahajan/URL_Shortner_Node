const mongoose = require('mongoose');
const User = require('./user');

const urlSchema = new mongoose.Schema({
  shortURL : {
    type : String,
    required : true, 
    unique : true,
  },

  redirectedURL : {
    type : String,
    required : true,
  },

  urlAnalytics : [{
    timestamp : {
      type : Number,
    }
  }],

  createdBy : {
    type : mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
}, {timestamps : true});

const URL = mongoose.model('url', urlSchema);

module.exports = URL;