const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const mysql = require("mysql");

app.use(express.json())

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "nodejs"
});

// connect to the database
connection.connect(function(error){
  if (error) throw error
  else console.log("connected to the database successfully!")
});

app.get('/users', (req, res) => {
        connection.query("SELECT * FROM loginuser", function (err, result, fields) {
        if (err) throw err;
        res.json(result);
        });
    });

app.post('/users', async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      const user = { name: req.body.name, password: hashedPassword }
      var sql = "INSERT INTO loginuser (user_name, user_pass) VALUES (user)";
      connection.query(sql, function (err, result) {
        if (err) throw err;
      });
      res.status(201).send()
    } catch {
      res.status(500).send()
    }
})

app.post('/users/login', async (req, res) => {
    var username = req.body.name;
    var password = req.body.password;
    const wrongInfo = { error: "Incorrect username or password"}
    
    connection.query("select * from loginuser where user_name = ? and user_pass = ?",[username,password],function(error,result,fields){
        if (result.length > 0) {
            res.json(result);
        } else {
          res.status(401).send(wrongInfo);
        }
        res.end();
    })
})

app.listen(3000)