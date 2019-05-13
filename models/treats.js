var orm = require("../config/orm.js");

var treats = {
  selectAll: function(cb) {
    orm.all("treats", function(res) {
      cb(res);
    });
  }
};
module.exports = treats;