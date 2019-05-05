const MongoClient = require('mongodb').MongoClient;
const connectionUrl = 'mongodb://localhost:27017/'
const databaseName = 'login'

MongoClient.connect(connectionUrl, {useNewUrlParser:true}, (error,client)=>{
    if(error){
        console.log('Unable to Connect!!');
    }

    const db = client.db(databaseName)
    
    // db.collection('logindetails').findOne({}, (error, result) =>{
    // db.collection('logindetails').find({}).toArray((error, result) =>{
    
    // the projection object that describes which fields to include in the result
    db.collection('logindetails').find({},{ projection: { _id: 0, name: 1, email: 1, password: 1, role: 1} }).toArray((error, result)=>{
        if(error){
                return console.log('Document Not Found!');
            }
            console.log(result);
            
        })
})