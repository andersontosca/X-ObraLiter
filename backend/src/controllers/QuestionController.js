const conn = require('../config/conexao')

class QuestionController {
    static getQuestions(req, res) {
        let sql = 'select * from pergunta';
        conn.query(sql, (err, rows) => {
            if (err) {
                res.status(422).json('err')
                return
            } else {
                res.status(200).json(rows.rows);
                return
            }
        });
    }

    static getQuestion(req, res) {
        let sql = `select * from pergunta where idPergunta = ${req.params.id}`
        conn.query(sql, (err, rows) => {
            if (err) {
                res.status(422).json(err)
            } else {
                res.status(200).json(rows.rows);
            }
        })
    }


    
    static async registerQuestion(req, res) {
        const { idPergunta, idQuiz, pergunta, ajuda, status, avaliacao } = req.body

        
        let sql = `insert into
                            pergunta(
                                idPergunta,
                                idQuiz,
    							pergunta,
    							ajuda,
    							status,
    							avaliacao
                          )
                            values( 
                                '${idPergunta}',
                                '${idQuiz}',
                                '${pergunta}',
                                '${ajuda}',
                                '${status}',
                                '${avaliacao}'
                            )`;

        conn.query(sql, (err, rows) => {
            if (err) {
                res.status(422).json(err);
            } else {
                res.status(200).json({ status: 'cadastro feito' })
            }
        })
    }

    static deleteQuestion(req, res) {
        let sql = `delete from pergunta where idPergunta = ${req.params.id}`;
        conn.query(sql, (err, rows) => {
            if (err) {
                res.status(422).json(err);
            } else {
                res.status(200).json({ status: 'Pergunta deletada' })
            }
        })
    }

    static async editQuestion(req, res) {
        const { id } = req.params;
        const { idPergunta, idQuiz, pergunta, ajuda, status, avaliaca } = req.body

        let sql = `update pergunta set 
                        idPergunta = '${idPergunta}',
                        idQuiz = '${idQuiz}',
                        pergunta = '${pergunta}',
                        ajuda = '${ajuda}',
                        status = '${status}',
                        avaliacao = '${avaliaca}'
                    where 
                        idPergunta = '${id}'`

        conn.query(sql, (err, rows) => {
            if (err) {
                res.status(422).json({
                    messege: err
                });
            } else {
                res.status(200).json({ status: 'Pergunta alterada'})
            }
        })
    }
}

module.exports = QuestionController