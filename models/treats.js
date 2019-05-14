var orm = require("../config/orm.js");

var treats = {
  selectAll: function(cb) {
    orm.selectAll("treats", function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb){
    orm.updateOne("treats", objColVals, condition, function(res){
      cb(res);
    });
  }
};
module.exports = treats;