const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.send('Probando ahora con el SSH desbloqueado')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
