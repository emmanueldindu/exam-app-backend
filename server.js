import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { config } from 'dotenv'
import router from './router/route.js'
import connect from './database/connection.js'

const app = express()
// app middleware
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())
config()


// app port

const port = process.env.PORT || 8080



app.use('/api', router)  
// routes



app.get('/', (req, res) => {
    try {
        res.json('Get Request')
    } catch (error) {
     res.json(error)   
    }
})




connect().then(() => {

    try{

    app.listen(port, () => {
        console.log(`server connected to http://localhost:${port}`)
  
    })


} catch (error) {
    console.log('cannot connect to server')

}
}).catch(error => {
    console.log('invalid DataBase connection')
})


