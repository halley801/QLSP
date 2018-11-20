import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import expressValidator from 'express-validator'
// import routes
import routes from '../routes'
// import response
import responseHelper from '../helpers/ResponseHelper'
export default () => {
  const app = express()

  app.disable('x-powered-by')
  // logger
  app.use(morgan('dev'))

  app.use(cookieParser())

  app.use(bodyParser.json())

  app.use(cors())

  app.use(responseHelper.middlewareResponse)
  app.use(expressValidator())
  app.use('/', routes)

  return app
}
