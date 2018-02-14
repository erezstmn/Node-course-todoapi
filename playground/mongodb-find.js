// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if(error){
        return console.log('Unable to connect to db server')
    }
    console.log('Connected');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5a83eb77083ef510c02d5230')
    // }).toArray().then((docs) =>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos' , err);
    // })

    // db.collection('Todos').find().count().then((count) =>{
    //     console.log(`Todos count: ${count}`);
      
    // }, (err) => {
    //     console.log('Unable to fetch todos' , err);
    // })


      db.collection('Users').find({
        name: 'Mike'
    }).toArray().then((docs) =>{
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch Users' , err);
    })
    
    //db.close();
});

