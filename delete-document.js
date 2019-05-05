const MongoClient = require('mongodb').MongoClient;
const connectionUrl = 'mongodb://localhost:27017/'
const databaseName = 'login'

MongoClient.connect(connectionUrl, {useNewUrlParser:true}, (error,client)=>{
    if(error){
        console.log('Unable to Connect!!');
    }

    const db = client.db(databaseName)
    const query = {email: 'arvindk@cdac.in'};
 
db.collection('logindetails').deleteOne({
    email: 'arvindk@cdac.in'
    }).then((result) => {
        console.log(result.modifiedCount);
    }).catch((error) => {
        console.log(error);
    })

})