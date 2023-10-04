const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This helps convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 
// Getting some text content.
recordRoutes.route("/api/content").get(async function (req, res) {
  try {
    const db_connect = await dbo.getDb("manonbgabrielle");
    const result = await db_connect.collection("ma_textcontent").find({}).toArray();
    res.json(result);
  } catch (err) {
    throw err;
  }
});

recordRoutes.route("/api/content/:name").get(async function (req, res) {
  try {
    const db_connect = await dbo.getDb("manonbgabrielle");
    let myquery = { name: req.params.name };
    const result = await db_connect.collection("ma_textcontent").findOne(myquery);
    res.json(result);
  } catch (err) {
    throw err;
  }
});

// Getting some images
recordRoutes.route("/api/images").get(async function (req, res) {
  try {
    const db_connect = await dbo.getDb("manonbgabrielle");
    const result = await db_connect.collection("ma_images").find({}).toArray();
    res.json(result);
  } catch (err) {
    throw err;
  }
});

// Getting some personnal informations
recordRoutes.route("/api/details").get(async function (req, res) {
  try {
    const db_connect = await dbo.getDb("manonbgabrielle");
    const result = await db_connect.collection("ma_details").find({}).toArray();
    res.json(result);
  } catch (err) {
    throw err;
  }
});

// Getting list of all books in projects
recordRoutes.route("/api/books").get(async function (req, res) {
  try {
    const db_connect = await dbo.getDb("manonbgabrielle");
    const result = await db_connect.collection("ma_books").find({}).toArray();
    res.json(result);
  } catch (err) {
    throw err;
  }
});

// Getting informations of one particular book
recordRoutes.route("/api/projets/:name").get(async function (req, res) {
  try {
    const db_connect = await dbo.getDb("manonbgabrielle");
    let myquery = { name: req.params.name };
    const result = await db_connect.collection("ma_books").findOne(myquery);
    res.json(result);
  } catch (err) {
    throw err;
  }
});

// Getting list of all books in projects
recordRoutes.route("/api/ressources").get(async function (req, res) {
  try {
    const db_connect = await dbo.getDb("manonbgabrielle");
    const result = await db_connect.collection("ma_tools").find({}).toArray();
    res.json(result);
  } catch (err) {
    throw err;
  }
});

// Getting informations of a certain type of tools
recordRoutes.route("/api/ressources/:name").get(async function (req, res) {
  try {
    const db_connect = await dbo.getDb("manonbgabrielle");
    let myquery = { name: req.params.name };
    const result = await db_connect.collection("ma_tools").findOne(myquery);
    res.json(result);
  } catch (err) {
    throw err;
  }
});

















// ___________
// EXEMPLES
// ___________
 


// This section will help you create a new record.
recordRoutes.route("/record/add").post(async function (req, res) {
  try {
    const db_connect = await dbo.getDb();
    let myobj = {
      name: req.body.name,
      position: req.body.position,
      level: req.body.level,
    };
    const result = await db_connect.collection("records").insertOne(myobj);
    res.json(result);
  } catch (err) {
    throw err;
  }
});
 
// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(async function (req, res) {
  try {
    const db_connect = await dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    let newvalues = {
      $set: {
        name: req.body.name,
        position: req.body.position,
        level: req.body.level,
      },
    };
    const result = await db_connect.collection("records").updateOne(myquery, newvalues);
    console.log("1 document updated");
    res.json(result);
  } catch (err) {
    throw err;
  }
});
 
// This section will help you delete a record
recordRoutes.route("/:id").delete(async function (req, res) {
  try {
    const db_connect = await dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    const result = await db_connect.collection("records").deleteOne(myquery);
    console.log("1 document deleted");
    res.json(result);
  } catch (err) {
    throw err;
  }
});
 
module.exports = recordRoutes;