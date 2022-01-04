import path from 'path'
import express from 'express'
import { Request, Response } from 'express'

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')

app.use(express.static(publicDirectoryPath))

app.set('view engine', 'hbs')
app.set('views', viewsPath)

app.get('/', (req: Request, res: Response) => {
    res.send('App works!')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
    })

