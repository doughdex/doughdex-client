require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(express.json());

app.use(morgan(':method :url :status - :response-time ms :remote-addr'));

app.use(express.static(path.join(__dirname, './client/public/')));

const PORT = process.env.PORT || 3000;

app.listen(PORT);
console.log(`Listening on port ${PORT}`);
