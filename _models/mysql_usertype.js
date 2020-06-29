const sql = require('../db/dbconfig.js');
const schema = 'usertypes';

const UserType = () => {} 

UserType.create = (userType, result) => {   
    sql.query(`INSERT INTO ${schema} ( type, description ) values (?, ?)`,
        [userType.type, userType.description], (err, resp) => {
            if (err) {                
              result(err, null);                
              return;
            }
            result(null, { id: resp.insertId, ...userType });
        });
};

UserType.findById = (id, result) => {
    sql.query(`SELECT * FROM userTypes WHERE id = ${id}`, (err, res) => {
        if (err) {           
            result(err, null);
            return;
        }

        if (res.length) {          
            result(null, res[0]);
            return;
        }        
        result({ kind: "not_found" }, null);
      
    });
};

UserType.getAll = result => {
    sql.query("SELECT * FROM userTypes", (err, res) => {
        if (err) {           
            result(null, err);
            return;
        }
        result(null, res);
    });
};

UserType.updateById = (id, userType, result) => {
  sql.query(
    "UPDATE userTypes SET type = ?, description = ? WHERE id = ?",
    [userType.type, userType.description, id],
    (err, res) => {
      if (err) {
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }
      result(null, { id: id, ...customer });
    }
  );
};

UserType.remove = (id, result) => {
  sql.query("DELETE FROM userTypes WHERE id = ?", id, (err, res) => {
    if (err) {
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }
    result(null, res);
  });
};

module.exports = UserType;
