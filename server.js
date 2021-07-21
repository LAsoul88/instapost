/* === External Modules === */
const express = require('express');

/* === Internal Modules === */

/* === Instance Modules === */
const app = express();

/* === Configuration === */
const PORT = 4000;

/* === Middleware === */

// access body data
app.use(express.urlencoded({ extended: true }));

/* === Routes === */

app.get("/", function (req, res) {
    res.redirect("/posts");
});

// === Post

// Index GET / - Presentational 
app.get('/posts', (req, res) => {
    res.send('Post Index');
});

// New GET /posts/new - Presentational Form
app.get('/posts/new', (req, res) => {
    res.send('Post Create page');
});

// Create POST /posts - Functional
app.post('/posts', (req, res) => {
    console.log(req.body);
    // echo
    res.send({
        message: "Hit the Create route",
        body: req.body,
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

