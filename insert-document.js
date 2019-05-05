// Insert Single Doucments

// const MongoClient = require('mongodb').MongoClient
// const ConnectionUrl = 'mongodb://127.0.0.1:27017';
// const databaseName = 'login'
// MongoClient.connect(ConnectionUrl,{useNewUrlParser: true}, (error,client)=>{
//     if(error){
//        return console.log('Unable to connet');
//     }

//     const db = client.db(databaseName)

//     const myData = {name: 'Nilesh Gupta', email:'gnilesh@cdac.in', password:'test@123', role: 'admin'};

//     db.collection("logindetails").insertOne(myData, (error, result)=>{
//         if(error){
//             console.log('Data Not Inserted!');
//         }

//         console.log('Document inserted');
//     })
// })


// Insert Multiple documents in the 'logindetails' collection

const MongoClient = require('mongodb').MongoClient;
const ConnectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'login'

MongoClient.connect(ConnectionUrl, {useNewUrlParser: true}, (error, client)=>{
    if(error){
        console.log('Data not Connect!');
    }
    const db = client.db(databaseName)

    var myMultipleData = [
        {_id: 001, name: 'Nilesh Gupta', email:'gnilesh@cdac.in', password:'test@123', role: 'admin'},
        {_id: 002, name: 'Nafisur', email:'nafisure@cdac.in', password:'test@123', role: 'rc'},
        {_id: 003, name: 'Md Saddam Hussain', email:'mdsaddam@cdac.in', password:'test@123', role: 'rc'},
        {_id: 004, name: 'Bitan', email:'bitan@cdac.in', password:'test@123', role: 'rc'}
    ];

    db.collection('logindetails').insertMany(myMultipleData, (error, result)=>{
        if(error){
            console.log('Data Not Inserted');
        }
        console.log("Number of documents inserted:"+result.insertedCount);
        
    })
})