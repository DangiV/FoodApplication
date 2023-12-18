import express from 'express'
import route from './Route/route.js';
import connection from './DB/connection.js'
import bodyParser from 'body-parser';
import cors from 'cors'

const app = express()
app.use(cors());
const port = 3020;
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(route)

app.listen(3020,() =>{
    console.log(`server invokded at http://localhost:${port}`);
    connection()
})
