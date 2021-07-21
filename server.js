/* === External Modules === */
const express = require('express');
const { runInNewContext } = require('vm');

/* === Internal Modules === */
const PostDB = require('./models/post_model.js');

/* === Instance Modules === */
const app = express();

/* === Configuration === */
app.set("view engine", "ejs");
const PORT = 4000;

/* === Middleware === */

// access body data
app.use(express.urlencoded({ extended: true }));

// public static serve
app.use(express.static("public"));

/* === Routes === */

app.get("/", function (req, res) {
    res.redirect("/posts");
});

// === Post

// Index GET / - Presentational 
app.get('/posts', (req, res) => {
    const context = {
        posts: PostDB.find(),
        title: "Your Feed",
    }
    return res.render("posts/index", context);
});

// New GET /posts/new - Presentational Form
app.get('/posts/new', (req, res) => {
    res.render('posts/new');
});

// Create POST /posts - Functional
app.post('/posts', (req, res) => {
    const newPost = {
        user: {
            username: req.body.username,
            avatar: req.body.avatar
        },
        content: req.body.content,
        image: req.body.image,
        isPrivate: false,
    };
    
    PostDB.create(newPost, (error, createdPost) => {
        if (error) {
            return res.send(error);
        }

        return res.redirect("/posts");
    });
});

// Show GET /posts/:id - Presentational
app.get('/posts/:id', (req, res) => {
    // echo param id
    res.send(`Post Show page id: ${req.params.id}`);
});

// Edit GET /posts/:id/edit - Presentational Form
app.get('/posts/:id/edit', (req, res) => {
    // echo param id
    res.send(`Post Edit page id: ${req.params.id}`);
});

// Update PUT /posts/:id - Functional
app.put('/posts/:id', (req, res) => {
    // echo body data and id
    res.send({
        message: "Hit the Update route",
        body: req.body,
        id: req.params.id,
    });
});

// Destroy DELETE /posts/:id - Functional
app.delete('/posts/:id', (req, res) => {
    // echo id
    res.send({
        message: "Hit Delete route",
        id: req.params.id,
    });
});

/* === Server Bind === */
app.listen(PORT, () => {
    console.log(
        `Instapost is live at port ${PORT} and ready to "borrow" your personal data`
        );
});

