console.log("Iniciando a aplicação");

const db = require('./dbConnection')
const express = require('express');
const app = express();
const cors = require('cors');

//Configurações Iniciais do servidor
// ---------------------------------------------)
//app.set('view engine', '')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});
//app.use(express.static('./public'));

app.get('/', (req, res) => {
    db.query('SELECT * from pacientes;', (error, result) => {
        //console.log(result)
        //console.log(error)
        res.send(result.rows)
    })
});
app.post('/salva', (req, res) => {
    //console.log(req.body)
    //console.log(req.params)
    console.log(req.body)
    res.sendStatus(200)
});

// Start Server
app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor rodando com express na porta 3000')
    console.log('Pressione CTRL+C para encerrar')
});