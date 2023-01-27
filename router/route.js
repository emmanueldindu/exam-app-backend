import { Router } from "express";
const router = Router()
// question rotes

// import controllers
import * as controller from '../controllers/controller.js'



// router.get('/questions', controller.getQuestions)
// router.post('/questions', controller.insertQuestions)
 

router.route('/questions')
    .get(controller.getQuestions)
    .post(controller.insertQuestions)
    .delete(controller.deleteQuestions)

router.route('/result')
    .get(controller.getResults)
    .post(controller.postResults)
    .delete(controller.deleteResults)

export default router