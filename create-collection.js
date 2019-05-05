var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/login";

MongoClient.connect(url,{useNewUrlParser: true}, (err, db) =>{
  if (err) throw err;
  var dbo = db.db("login");
  dbo.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});