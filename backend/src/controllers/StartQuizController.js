const conn = require('../config/conexao')

class StartQuizController {
    static getTitle(req, res) {
        let sql = `
        select titulo as quiz from quiz  where idquiz = 3`

        conn.query(sql, (err, rows) => {
            if (err) {
                res.status(422).json(err)
            } else {
                res.status(200).json(rows.rows);
            }
        })
    }
    static getQuestion(req, res) {
        let sql = `
        select pergunta  from pergunta as pergunta where idquiz = 3 and idpergunta = 8`

        conn.query(sql, (err, rows) => {
            if (err) {
                res.status(422).json(err)
            } else {
                res.status(200).json(rows.rows);
            }
        })
    }
}

module.exports = StartQuizController;