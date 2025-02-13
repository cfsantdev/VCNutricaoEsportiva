require('dotenv/config');

const express = require('express');
const cors = require('cors');
const path = require('path');
const parser = require('body-parser');
const app = express();

app.use(parser.json());
app.use(express.static(__dirname));
app.use(cors({
    origin: '*'
}))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// Iniciando o servidor
app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
});