// set up token middleware here
// set up token middleware here
import jwt from 'jsonwebtoken'
import "dotenv/config.js"
const SECRET_KEY = "secretkey1234";

const authenticate = (req, res, next) => {
    const token = req.headers.authorization

    if(!token) {
        return res.status(401).json({status: 401, message: "Authentication failed - missing token"})
    }

    console.log("token", token)

    const tokenWithoutBearar = token.split(" ")[1]

    jwt.verify(tokenWithoutBearar, SECRET_KEY, (error, decoded) => {
        if(error) {
            return res.status(401).json({status: 401, message: "Authentication failed - missing token"})
        }

        req.decoded = decoded

        next()
    })

}

export default authenticate