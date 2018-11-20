import http from 'http'

import BootExpress from './boots/BootExpress'
import BootMongo from './boots/BootMongo'

import { PORT } from './config/Server'

const RunApp = async () => {
  try {
    await BootMongo()
    let app = BootExpress()
    //
    const server = http.createServer(app)

    server.listen(PORT, () => console.log(`Listening on port ${PORT}`))
  } catch (error) {
    console.log('[ERROR]', error)
    process.exit(1)
  }
}

RunApp()
