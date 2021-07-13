const Kontak = require("../models/kontak.model.js");

// Create and Save a new Kontak
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a kontak
  const kontak = new Kontak({
    email: req.body.email,
    name: req.body.name,
    tlp: req.body.tlp
  });

  // Save kontak in the database
  Kontak.create(kontak, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Kontak."
      });
    else res.send(data);
  });
};

// Retrieve all Kontaks from the database.
exports.findAll = (req, res) => {
  Kontak.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving konstaks."
      });
    else res.send(data);
  });
};

// Find a single Kontak with a kontakId
exports.findOne = (req, res) => {
  Kontak.findById(req.params.kontakId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Kontak with id ${req.params.kontakId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Kontak with id " + req.params.kontakId
        });
      }
    } else res.send(data);
  });
};

// Update a Kontak identified by the KontakId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Kontak.updateById(
    req.params.kontakId,
    new Kontak(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Kontak with id ${req.params.kontakId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Kontak with id " + req.params.kontakId
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Kontak with the specified kontakId in the request
exports.delete = (req, res) => {
  Kontak.remove(req.params.kontakId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Kontak with id ${req.params.kontakId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Kontak with id " + req.params.kontakId
        });
      }
    } else res.send({ message: `Kontak was deleted successfully!` });
  });
};


