import { Router } from "express"
import bodyParser from "body-parser"
import middlewares from "./middlewares"
import cors from "cors"
import { getConfigFile } from "medusa-core-utils"

export default () => {
  const router = Router()

  const { configModule } = getConfigFile(rootDirectory, `medusa-config`)
  const config = (configModule && configModule.projectConfig) || {}

  let product = require("./routes/product")
  let dashboard = require("./routes/dashboard")

  const storeCors = config.store_cors || ""

  router.use(
    cors({
      origin: storeCors.split(","),
      credentials: true,
    })
  )

  router.post(
    "/sales-details",
    bodyParser.json(),
    middlewares.wrap(dashboard.getSalesDetails))
  
  // router.post(
  //   "/admin/update-product",
  //   bodyParser.json(),
  //   middlewares.wrap(product.update))

  // router.post(
  //   "admin/add-product",
  //   bodyParser.json(),
  //   middlewares.wrap(product.add))



  return router
}