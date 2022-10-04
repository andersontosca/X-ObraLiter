const conn = require('../config/conexao')

class AnswerControler {

    static getAnswers(req, res) {
        let sql = 'select * from resposta';
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

    static getAnswer(req, res) {
        let sql = `select * from resposta where idResposta = ${req.params.id}`
        conn.query(sql, (err, rows) => {
            if (err) {
                res.status(422).json(err)
            } else {
                res.status(200).json(rows.rows);
            }
        })
    }

    static async registerAnswer(req, res) {
        const {idResposta, idPergunta, resposta, status } = req.body

        /*  
            idPergunta, resposta, status        
            idPergunta,
            resposta, 
            status 
        */
        console.log(idResposta, idPergunta, resposta, status)
        let sql = `insert into
                            resposta(
                                idResposta,
                                idPergunta,
                                resposta, 
                                status 
                          )
                            values( 
                                '${idResposta}',
                                '${idPergunta}',
                                '${resposta}',
                                '${status}'                                
                            )`;

        conn.query(sql, (err, rows) => {
            if (err) {
                res.status(422).json(err);
            } else {
                res.status(200).json({ status: 'cadastro feito' })
            }
        })
    }

    static deleteAnswer(req, res) {
        let sql = `delete from resposta where idResposta = ${req.params.id}`;
        conn.query(sql, (err, rows) => {
            if (err) {
                res.status(422).json(err);
            } else {
                res.status(200).json({ status: 'Resposta deletada' })
            }
        })
    }

    static async editAnswer(req, res) {
        const { id } = req.params;
        const {idPergunta, resposta, status } = req.body


        let sql = `update pergunta set
                        idPergunta = '${idPergunta}',
                        resposta = '${resposta}',
                        status = '${status}'
                   where 
                        idPergunta = '${id}'`

        conn.query(sql, (err, rows) => {
            if (err) {
                res.status(422).json({
                    messege: err
                });
            } else {
                res.status(200).json({ status: 'Resposta alterada' })
            }
        })
    }


}

module.exports = AnswerControler;