/* === External Modules === */
const express = require('express');

/* === Internal Modules === */

/* === Instance Modules === */
const app = express();

/* === Configuration === */
const PORT = 4000;

/* === Middleware === */

/* === Routes === */

app.get("/", function (req, res) {
    res.redirect("/posts");
});

// === Post

// Index GET / - Presentational 
app.get('/', (req, res) => {
    res.send('Post Index');
});

// New GET /posts/new - Presentational Form

// Create POST /posts - Functional

// Show GET /posts/:id - Presentational

// Edit GET /posts/:id/edit - Presentational Form

// Update PUT /posts/:id - Functional

// Destroy DELETE /posts/:id - Functional

/* === Server Bind === */
app.listen(PORT, () => {
    console.log(
        `Instapost is live at port ${PORT} and ready to "borrow" your personal data`
        );
});

