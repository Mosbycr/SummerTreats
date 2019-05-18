const mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "3ThreeBelieve!",
  database: "summer_treats_db"
});

// Make connection.
connection.connect((err)=>{
  if(err){
    console.error("error connecting: " + err.stack);
    // what is return?
    return;
  }else{console.log("connected as id " + connection.threadId);}
});

// Export connection for our ORM to use.
module.exports = connection;
