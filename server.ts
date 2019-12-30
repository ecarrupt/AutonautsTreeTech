import express from "express";
import bodyParser from "body-parser";
import Datastore from "nedb";

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var db = new Datastore({ filename: "data/db", autoload: true });

app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});
app.post("/api/world", (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`
  );
});

app.post("/api/item", (req, res) => {
  db.update({ itemID: req.query.id }, req.body, { upsert: true }, function(
    err,
    numReplaced
  ) {
    if (err) console.log(err);
    res.send(JSON.stringify({ ok: numReplaced === 1 }));
  });
});

app.delete("/api/item", (req, res) => {
  db.remove({ itemID: req.query.id }, {}, function(err, numRemoved) {
    if (err) console.log(err);
    res.send(JSON.stringify({ ok: numRemoved === 1 }));
  });
});

app.get("/api/item", (req, res) => {
  db.find({ itemID: req.query.id }, (err: any, docs: any) => {
    if (err) console.log(err);
    res.send(JSON.stringify(docs[0]));
  });
});

app.get("/api/items", (req, res) => {
  db.find(
    { ...JSON.parse(req.query.filter), itemID: { $exists: true } },
    (err: any, docs: any) => {
      if (err) console.log(err);
      res.send(JSON.stringify(docs));
    }
  );
});

app.post("/api/recipe", (req, res) => {
  db.update({ recipeID: req.query.id }, req.body, { upsert: true }, function(
    err,
    numReplaced
  ) {
    if (err) console.log(err);
    res.send(JSON.stringify({ ok: numReplaced === 1 }));
  });
});

app.delete("/api/recipe", (req, res) => {
  db.remove({ recipeID: req.query.id }, {}, function(err, numRemoved) {
    if (err) console.log(err);
    res.send(JSON.stringify({ ok: numRemoved === 1 }));
  });
});

app.get("/api/recipe", (req, res) => {
  db.find({ recipeID: req.query.id }, (err: any, docs: any) => {
    if (err) console.log(err);
    res.send(JSON.stringify(docs[0]));
  });
});

app.get("/api/recipes", (req, res) => {
  db.find(
    { ...JSON.parse(req.query.filter), recipeID: { $exists: true } },
    (err: any, docs: any) => {
      if (err) console.log(err);
      res.send(JSON.stringify(docs));
    }
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));
