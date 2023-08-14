import express from 'express'
import corsMiddleware from './middleware/cors.middleware'
import routerController from './controllers/router.controller'

const app = express()
const port = process.env.port ?? 3000

app.use(corsMiddleware)
app.use(express.json())
app.use('/', routerController)

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})
