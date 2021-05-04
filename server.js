const http = require('http')

const server = http.createServer((req, res) => {
    const pathName = req.url
    if (pathName === '/home') {
        console.log(res.body)
        res.end("Home Page")
    } else if (pathName === '/movie') {
        res.end('Movie page')
    } else if (pathName === '/cricket') {
        res.end('Cricket page')
    } else if (pathName === '/update') {
        res.end('Update page')
    } else {
        res.end('404 Page not Found')
    }
})

server.listen(5000, "127.0.0.1", () => {
    console.log('Our server is listening now at port 5000')
})