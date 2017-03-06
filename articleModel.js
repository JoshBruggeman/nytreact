var mongoose = require("mongoose");

var Schema = mongoose.Schema;


var ArticleSchema = new Schema({
  
  articleTitle: {
    type: String,
    trim: true,
  },
  
  articleLink: {
    type: String,
    trim: true,
  },
  
  lastUpdated: { type: Date }
});


/
var Article = mongoose.model("Article", ArticleSchema);


module.exports = Article;