//grab mysql connection
const connection = require("../config/connection.js");

module.exports = (()=>{
//prints questionmarks where needed in mysql queries
  function printQuestionMarks(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
      arr.push("?");
    }
    return arr.toString();
  }
  // Helper function to convert object key/value pairs to SQL syntax
  function objToSql(ob) {
    let arr = [];
    // loop through the keys and push the key/value as a string int arr
    for (let key in ob) {
      let value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") > 0) {
          value = `'${value}'`;
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
    return arr.toString();
  }

  //functions stating parameters to be used in query and sets up mysql query string
  function selectAll(tableInput, cb){
    let queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, (err, result)=>{
      if (err) {throw err;}
      cb(result);
    });
  }
  function updateOne(table, objColVals, condition, cb) {
    let objectToString = objToSql(objColVals);
    let queryString = `UPDATE ${table} SET ${objectToString} WHERE ${condition}`;
    console.log(queryString);
    connection.query(queryString, (err, result)=>{
      if(err){throw err;}
      cb(result);
    });
  }
  function insertOne(table, cols, values, cb){
    let colsStr = cols.toString();
    let questionMarks = printQuestionMarks(values.length);
    let queryString = `INSERT INTO ${table} (${colsStr}) VALUES (${questionMarks}) `;
    console.log(queryString);
    connection.query(queryString, values, (err, result)=>{
      if(err){throw err;}
      cb(result);
    });
  }
  return{
    selectAll : selectAll,
    updateOne : updateOne,
    insertOne : insertOne
  }
})();

