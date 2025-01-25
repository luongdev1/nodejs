import homeRouter from "./homeRouter.js"

const routes = (app) => {
     app.use('/', homeRouter)
}

export default routes