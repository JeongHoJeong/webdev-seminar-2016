const express = require('express')
const app = express()

app.use(express.static('public'))

app.listen(3333, () => {
  console.log('App listening at port 3333.')
})
