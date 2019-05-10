module.exports = {
    getQuestions: (req, res) => {
        req.app.get('db').read_questions()
            .then(questions => res.status(200).send(questions))
            .catch(err => res.status(500).send('Failed to get questions'))      
    }
}