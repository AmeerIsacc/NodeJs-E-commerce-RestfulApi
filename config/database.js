const mongoose = require('mongoose'); 

const dbConnection = ()=>{
    //dbConnection
    mongoose
    .connect(process.env.DB_URL)
    .then((conn)=>{
        console.log(`Database is connected to: ${conn.connection.host}`);
    })
}

module.exports = dbConnection;