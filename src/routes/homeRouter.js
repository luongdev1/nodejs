import express from 'express'
import { homePage, homePage1 } from '../controllers/homeController.js'
const router = express.Router()

router.get('/home', homePage1)
router.get('/', homePage)

export default router