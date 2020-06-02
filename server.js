const express = require('express')
const cors = require('cors')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const app = express()

app.use(cors())
app.use('/public', express.static(process.cwd() + '/public'))

app.get('/', (req, res) => {
     res.sendFile(process.cwd() + '/views/index.html')
  })

app.get('/hello', (req, res) => {
  res.json({greetings: "Hello, API"})
}),

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  const response = {
    name: req.file.originalname,
    mimetype: req.file.mimetype,
    size: req.file.size
  }

  console.log(response)
  res.json(response)
})

app.listen(3000, function () {
  console.log('Node.js listening ...')
})


/* JSON response
{
  "name": "deno.png",    // filename
  "type": "image/png",   // mime/type
  "size": 9085           // file size in bytes
}
*/