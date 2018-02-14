// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if(error){
        return console.log('Unable to connect to db server')
    }
    console.log('Connected');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert to do', err );
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Erez Shtayman',
    //     age: 32,
    //     location: 'Tel-Aviv'

    // }, 
    // (error, result) => {
    //     if (error){
    //         return console.log('Unable to insert user', err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();
});

