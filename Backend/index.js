const express = require("express");
require("dotenv").config();

const app = express();

app.listen(process.env.port, () => {
    console.log(`Server running on port ${process.env.port}`);
});