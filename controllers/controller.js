export async function getQuestions(req, res) {
    res.json("questions api get request")
}

export async function insertQuestions(req, res) {
    res.json('post question api')
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