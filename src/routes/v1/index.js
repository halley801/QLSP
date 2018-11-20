import fs from 'fs'

const router = require('express').Router()
// Create use routers

function BootRoutes () {
  fs.readdirSync(__dirname).forEach((file) => {
    if (file.match(/index.js/)) return false
    const fileName = file.replace('.js', '')
    return router.use(`/${fileName}`, require(`./${fileName}`).default)
  })

  return router
}
export default BootRoutes()
