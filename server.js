/* === External Modules === */
const express = require('express');

/* === Internal Modules === */

/* === Instance Modules === */
const app = express();

/* === Configuration === */
const PORT = 4000;

/* === Middleware === */

/* === Routes === */

/* === Server Bind === */
app.listen(PORT, () => {
    console.log(`Instapost is live at port ${PORT} and ready to "borrow" your personal data`);
});