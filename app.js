const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));

// You should create .env file and put the MongoDB URI and change in mongoose.connect
mongoose.connect("mongodb://127.0.0.1:27017/wikiDB", {
  useNewUrlParser: true,
});

const articleSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Article = mongoose.model("Article", articleSchema);

// app.get("/articles", async (req, res) => {
//     await Article.find().then(articles => {
//         res.send(articles);
//     }).catch(err => {
//         console.log(err);
//     });
// })

// app.post("/articles", async (req, res) => {
//     // console.log(req.body.title);
//     // console.log(req.body.content);

//     const newArticle = new Article({
//         title: req.body.title,
//         content: req.body.content
//     });

//     newArticle.save().then(() => {
//         console.log("Created Successfully!");
//         res.send(newArticle);
//     }).catch(err => {
//         console.log(err);
//     });
// })

// app.delete("/articles", async (req, res) => {
//     Article.deleteMany().then(() => {
//         console.log("Sucessfuly deleted all articles.");
//     }).catch(err => {
//         console.log(err);
//     });
// })

app
  .route("/articles")
  .get(async (req, res) => {
    await Article.find()
      .then((articles) => {
        res.send(articles);
      })
      .catch((err) => {
        res.send(err);
      });
  })
  .post(async (req, res) => {
    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content,
    });

    newArticle
      .save()
      .then(() => {
        res.send("Created Successfully!");
        res.send(newArticle);
      })
      .catch((err) => {
        res.send(err);
      });
  })
  .delete(async (req, res) => {
    Article.deleteMany()
      .then(() => {
        res.send("Sucessfuly deleted all articles.");
      })
      .catch((err) => {
        res.send(err);
      });
  });

app
  .route("/articles/:articleTitle")
  .get(async (req, res) => {
    Article.findOne({ title: req.params.articleTitle })
      .then((article) => {
        res.send(article);
      })
      .catch((err) => {
        res.send(err);
      });
  })
  .put(async (req, res) => {
    Article.findOneAndUpdate(
      { title: req.params.articleTitle },
      { title: req.body.title, content: req.body.content },
      { overwrite: true }
    )
      .then((updatedArticle) => {
        if (updatedArticle) {
            res.send("Sucessfully updated article");
        } else {
            res.send("Failed to update article");
        }
        res.redirect("/articles");
      })
      .catch((err) => {
        res.send(err);
      });
  })
  .patch(async (req, res) => {
    Article.updateOne(
      { title: req.params.articleTitle },
      { $set: req.body },
      { overwrite: true }
    )
      .then(() => {
        res.send("Sucessfuly update article.");
      })
      .catch((err) => {
        res.send(err);
      });
  })
  .delete(async (req, res) => {
    await Article.deleteOne(
        {title: req.params.articleTitle}
    ).then(() => {
        res.send("Sucessfuly deleted article.");
    })
    .catch((err) => {
        res.send(err);
    });
  })

app.listen(5500, function () {
  console.log("Server started on port 5500");
});
