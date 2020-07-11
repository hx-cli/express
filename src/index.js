const path = require('path')
const express = require('express')

const app = express()

app.use(express.static(path.resolve(__dirname, './static')))

app.listen(3000, () => {
  console.log('listen on 3000 => http://localhost:3000')
})
