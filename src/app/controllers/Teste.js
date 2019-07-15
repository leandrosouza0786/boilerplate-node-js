class Testeop{
   metodoTeste(req, res){
     const { variavel } = req.params
     console.log('oq vem', variavel)

     return res.json({ teste: 'teste' })
  }
}

module.exports = new Testeop()
