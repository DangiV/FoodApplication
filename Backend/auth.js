import jsonwebtoken from 'jsonwebtoken';
const Secreat_Key = "kjdshfhsdjkhfjkfjk"

export const CreateToken = (id) => {
    const token = jsonwebtoken.sign(id.toString(), Secreat_Key)
    console.log("token", token);
    return token;
}

export const AuthToken = (req, res, next) => {
    const authheader = req.headers['authorization']
    console.log("authheader", authheader);
    const token = authheader && authheader.split(" ")[1]
    if (token == null) {
        res.status(403).json("unathorized person");
    }
    jsonwebtoken.verify(token, Secreat_Key, (error, respose) => {
        if (error) {
            res.status(403).json('unverified person')
        }
        else {
            req.respose = respose
            next();
        }
    })
}