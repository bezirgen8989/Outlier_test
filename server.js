const http = require('http')

const PORT = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  if (req.url === '/') return respondHello(req, res)
  if (req.url === '/base64') return getBase64(req, res)
<<<<<<< HEAD
  if (req.url === '/user-agent') return getUserAgent(req, res)

=======
>>>>>>> e52b587 (add base64 endpoint)
  res.end()
})

function respondHello (req, res) {
  res.end(JSON.stringify({ msg: 'hello' }))
}

function getBase64 (req, res) {
  res.end(JSON.stringify({ base: 'base64' }))
}

<<<<<<< HEAD
function getUserAgent (req, res) {
  res.end(JSON.stringify({ userAgentName: 'testUserAgent', id: 44 }))
}



=======
>>>>>>> e52b587 (add base64 endpoint)
server.listen(PORT)
console.log(`Server listening on port ${PORT}`)

if (require.main !== module) module.exports = server
