const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

//Conectando ao bd mongodb
mongoose.connect('mongodb+srv://brian:98131432@cluster0-auavz.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


//MongoDB (Não-relacional)


app.listen(3333);