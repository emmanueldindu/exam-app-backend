import Questions from "../models/questionSchema.js"
import Results from "../models/resultSchema.js"


export async function getQuestions(req, res) {
    try {
        const q = await Questions.find()
        res.json(q)
    } catch (error) {
        res.json({ error })
        
    }
}

export async function insertQuestions(req, res) {
   try {
    Questions.insertMany({questions: [0], answers:[1]})
   } catch (error) {
    res.json({error})
   }
}

export async function deleteQuestions(req, res) {
    res.json('delete question api')
}

export async function getResults(req, res) {
    res.json('get results')
}

export async function postResults(req, res) {
    res.json('post results')
}

export async function deleteResults(req, res) {
    res.json('delete results')
}