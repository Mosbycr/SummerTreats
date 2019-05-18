//grab orm.js
const orm = require("../config/orm.js");

//takes functions in orm, calls them, states table name and parameters to be used
module.exports = (()=>{
  let treats = 'treats';
  function selectAll(cb){
    orm.selectAll(treats, (res)=>{cb(res)});
  }
  function updateOne(){
    orm.updateOne(treats, objColValues, condition, (res)=>{cb(res)});
  }
  function insertOne(){
    orm.insertOne(treats, cols, values, (res)=>{cb(res)});
  }
  return{
    selectAll : selectAll,
    updateOne : updateOne,
    insertOne : insertOne
  }
})()