import jwt from "jsonwebtoken"

const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization
    if (!authHeader?.startsWith(`Bearer `)) {
        return res.status(401).json({ message: `not authorized!` })
    }

    const accessToken = authHeader.split(` `)[1]
    jwt.verify(
        accessToken,
        process.env.ACCESS_TOKEN,
        (err, decoded) => {
            if (err) return res.status(403).json({ message: `forbidden!` })
            req.user = decoded
            next()
        }
    )
}

export default verifyJWT