const express = require("express")
const helmet = require("helmet")
const cookieParser = require("cookie-parser")

const authRoutes = require("./auth/auth-routes")

const server = express()
const PORT = 5000

server.use(helmet())
server.use(express.json())
server.use(cookieParser())
server.use('/api/auth', authRoutes)


server.use('/', (err, req, res, next) => {
    console.log("Error: ", err)
    res.status(500).json("Something went wrong")
})


server.listen(PORT, console.log(`Server is running on port ${PORT}`))