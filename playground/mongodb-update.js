// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if(error){
        return console.log('Unable to connect to db server')
    }
    console.log('Connected');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5a83f513f92242c4e18df811')
    // },{
    //     $set: {
    //         completed:true
    //     }
    // },{
    //     returnOriginal: false
    // }).then((res) => {
    //     console.log(res);
    // });

    // db.collection('Users').findOneAndUpdate({
    //     _id: new ObjectID('5a83ecad2f51cb16f0e286a1')
    // }, {
    //     $set: {
    //         name: 'Erez'
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((res) => {
    //     console.log(res);
    // });

    // db.collection('Users').findOneAndUpdate({
    //     _id: new ObjectID('5a83ecad2f51cb16f0e286a1')
    // }, {
    //     $inc: {
    //         age: 100
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((res) => {
    //     console.log(res);
    // });

    
    //db.close();
});

