module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Voce esta na rota de atendimentos e esta realizando um GET'))

    app.post('/atendimentos', (req, res) =>{
        console.log(req.body)
        req.send('Voce esta na rota de atendimento e esta realizando um POST')
    })
}

