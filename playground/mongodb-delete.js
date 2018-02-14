// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if(error){
        return console.log('Unable to connect to db server')
    }
    console.log('Connected');

    //delete many
    // db.collection('Todos').deleteMany({
    //     text: 'Eat lunch'
    // }).then ((result) => {
    //     console.log(result);
    // });
    //delete one

    // db.collection('Todos').deleteOne({
    //     text: 'Eat lunch'
    // }).then ((res) => {
    //     console.log(res);
    // })

    //find one and delete

    // db.collection('Todos').findOneAndDelete({
    //     completed:false
    // }).then((res) => {
    //     console.log(res);
    // })
    
    //db.close();
});

