const MongoClient = require('mongodb').MongoClient;
const connectionUrl = 'mongodb://localhost:27017/'
const databaseName = 'login'

MongoClient.connect(connectionUrl, {useNewUrlParser:true}, (error,client)=>{
    if(error){
        console.log('Unable to Connect!!');
    }

    const db = client.db(databaseName)
    const query = {email: 'bitan@cdac.in', password: 'test@123'};

db.collection('logindetails').find(query).toArray((error, result)=>{
        if(error){
                return console.log('Document Not Found!');
            }
            if(result.length >0){
                console.log(result);
                console.log('Login Successful');
            }else{
                return console.log('Login Fail');
            }
        })
})