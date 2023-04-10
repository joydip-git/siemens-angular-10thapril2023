const fs = require('fs')
const http = require('http')

const server = http.createServer(
    function (req, res) {
        fs.readFile(
            './data.txt',
            function (err, data) {
                if (err)
                    res.end('error occurred: ' + err.message)
                if (data)
                    res.end(data.toString())
            }
        )
    }
)
server.listen(
    4000,
    function () {
        console.log('server is running using port no: 4000')
    }
)