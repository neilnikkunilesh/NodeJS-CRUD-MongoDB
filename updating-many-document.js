const MongoClient = require('mongodb').MongoClient;
const connectionUrl = 'mongodb://localhost:27017/'
const databaseName = 'login'

MongoClient.connect(connectionUrl, {useNewUrlParser:true}, (error,client)=>{
    if(error){
        console.log('Unable to Connect!!');
    }

    const db = client.db(databaseName)
    const query = {email: 'bitan@cdac.in'};
    const updatingValues = {$set: {name: 'Bitan Maity', role: 'admin'}}

// db.collection('logindetails').updateOne(query, updatingValues, (error, result)=>{
//         if(error){
//                 return console.log('Document Not Found!');
//             }
//                console.log('Document is updated');
//         })

//   const updatePromise =  
db.collection('logindetails').updateMany({
     password: 'test@123'
    },{
        $set:{
            password: 'Cdac@123'
        }
    }).then((result) => {
        console.log(result.modifiedCount);
    }).catch((error) => {
        console.log(error);
    })

    // updatePromise.then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })
})