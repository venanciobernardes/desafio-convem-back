const express = require('express');
const cors = require('cors');
const server = express();
const APIResponse = require('./APIResponse');

server.use(cors())

server.use(express.json())

server.post("/message", (req, res) => {
    const { userAnswer } = req.body;

    const response = new APIResponse('');

    (userAnswer.toLowerCase() == 'sim' ?
        response.message = 'Você está mais próximo de se juntar ao time!' :
        response.message = 'Erro');

    return res.status(200).json(response);
});

server.listen(4001, () => {
    console.log('O servidor está rodando!')
});