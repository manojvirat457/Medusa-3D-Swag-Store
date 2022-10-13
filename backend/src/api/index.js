import { Router } from "express"
import bodyParser from "body-parser"
import middlewares from "./middlewares"
import cors from "cors"
import { getConfigFile } from "medusa-core-utils"
import cors from "cors"
import express from "express"

export default (rootDirectory) => {
    const router = Router()

    let product = require("./routes/product")
    let dashboard = require("./routes/dashboard")
    let store = require("./routes/store");

    const { configModule } = getConfigFile(rootDirectory, "medusa-config")

    const { projectConfig } = configModule
    const corsOptions = {
        origin: [...projectConfig.store_cors.split(","), projectConfig.admin_cors.split(",")],
        credentials: true,
    }

    

    router.use("/sales-details/:duration", cors(corsOptions))
    router.use("/admin/stores", cors(corsOptions))

    // localhost:3000/sales-details?duration=week
    router.get("/sales-details/:duration", middlewares.wrap(dashboard.getSalesDetails))
    router.get("/admin/stores", middlewares.wrap(store.getAllStores))

    return router
}