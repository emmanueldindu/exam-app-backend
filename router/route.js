import { Router } from "express";
const router = Router()
// question rotes

// import controllers
import * as controller from '../controllers/controller.js'



// router.get('/questions', controller.getQuestions)
// router.post('/questions', controller.insertQuestions)
 

router.route('/questions').get(controller.getQuestions).post(controller.insertQuestions)


export default router