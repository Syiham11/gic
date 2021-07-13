module.exports = app => {
  const kontaks = require("../controllers/kontak.controller.js");

  // Create a new Kontak
  app.post("/kontaks", kontaks.create);

  // Retrieve all Kontak
  app.get("/kontaks", kontaks.findAll);

  // Retrieve a single Kontak with kontakId
  app.get("/kontaks/:kontakId", kontaks.findOne);

  // Update a Kontak with kontakId
  app.put("/kontaks/:kontakId", kontaks.update);

  // Delete a Kontak with kontakId
  app.delete("/kontaks/:kontakId", kontaks.delete);

};
