import express from "express";
import mysql from "mysql";
import cors from "cors";
const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "hooman123",
  database: "book",
});
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.json("hello");
});
app.get("/books", (req, res) => {
  const q = "SELECT * FROM book";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});
app.post("/books", (req, res) => {
  const q = "insert into book (`title`,`desc`,`cover`,`price`) values (?)";
  const values = [
    req.body.title,
    req.body.desc,
    req.body.cover,
    req.body.price,
  ];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("book has been created successfully");
  });
});
app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q = "delete from book where id = ?";
  db.query(q, bookId, (err, data) => {
    if (err) res.json(err);
    return res.json("book has been deleted successfully");
  });
});
app.get("/update/:id", (req, res) => {
  const q = "SELECT * FROM book where id = ?";
  const bookId = req.params.id;
  db.query(q, bookId, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});
app.put("/update/:id", (req, res) => {
  const q =
    "update book set `title` = ?, `desc` = ?, `cover` = ?, `price` = ? where id = ?";
  const bookId = req.params.id;
  const values = [
    req.body.title,
    req.body.desc,
    req.body.cover,
    req.body.price,
  ];
  db.query(q, [...values, bookId], (err, data) => {
    if (err) return res.json(err);
    return res.json("book has been updated successfully!");
  });
});

app.listen(8810, () => {
  console.log("backend connected!");
});
