
var mongoose = require("mongoose");

//save a reference to the schema constructor
var Schema = mongoose.Schema;

// use the Schema constructor, create a new UserSchema object

var ArticleSchema = new Schema ({
title: {
    type: String,
    required: true
},
link: {
    type: String,
    required: true
},
note: {
type: Schema.Types.ObjectId,
ref: "Note"
}   
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;