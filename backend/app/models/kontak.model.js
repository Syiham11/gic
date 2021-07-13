const sql = require("./db.js");

// constructor
const Kontak = function(kontak) {
  this.email = kontak.email;
  this.name = kontak.name;
  this.tlp = kontak.tlp;
};

Kontak.create = (newKontak, result) => {
  sql.query("INSERT INTO kontaks SET ?", newKontak, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created kontak: ", { id: res.insertId, ...newKontak });
    result(null, { id: res.insertId, ...newKontak });
  });
};

Kontak.findById = (kontakId, result) => {
  sql.query(`SELECT * FROM kontaks WHERE id = ${kontakId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found kontak: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Kontak with the id
    result({ kind: "not_found" }, null);
  });
};

Kontak.getAll = result => {
  sql.query("SELECT * FROM kontaks", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("kontaks: ", res);
    result(null, res);
  });
};

Kontak.updateById = (id, kontak, result) => {
  sql.query(
    "UPDATE kontaks SET email = ?, name = ?, tlp = ? WHERE id = ?",
    [kontak.email, kontak.name, kontak.tlp, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found kontak with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated kontak: ", { id: id, ...kontak });
      result(null, { id: id, ...kontak });
    }
  );
};

Kontak.remove = (id, result) => {
  sql.query("DELETE FROM kontaks WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Kontak with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted kontak with id: ", id);
    result(null, res);
  });
};


module.exports = Kontak;
