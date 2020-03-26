const express = require("express")
const helmet = require("helmet")
const cookieParser = require("cookie-parser")

const authRoutes = require("./auth/auth-routes")
const userRoutes = require("./users/users-routes")
const truckRoutes = require("./trucks/trucks-routes")
const restrictPath = require("./global-middleware/restrictPath")

const cors = require("cors");

const server = express()
const PORT = 5000

server.use(helmet())
server.use(express.json())
server.use(cookieParser())
server.use(cors())
server.use('/api/auth', authRoutes)
server.use('/api/users', restrictPath(), userRoutes)
server.use('/api/trucks', restrictPath(), truckRoutes)


server.use('/', (err, req, res, next) => {
    console.log("Error: ", err)
    res.status(500).json("Something went wrong")
})


server.listen(PORT, console.log(`Server is running on port ${PORT}`))
