import http from "http"

const server = http.createServer((req, res) => {

    if (req.url === '/' && req.method === 'GET') {

        res.end('<h1>Welcome to Backend Development</h1>')

    } else if (req.url === '/about' && req.method === 'GET') {

        res.end(JSON.stringify({
            message: 'Welcome to my about page'
        }))

    } else if (req.url === '/contact' && req.method === 'GET') {

        res.end(JSON.stringify({
            message: 'Welcome to my contact page',
            email: 'example@gmail.com',
            phone: '1234567890'
        }))

    } else {

        res.statusCode = 404

        res.end(JSON.stringify({
            message: 'Page not found'
        }))
    }
})

server.listen(3000, () => {
    console.log('Server is running on port 3000')
})
