const conn = require("../config/conexao");

class AuthorController{

    static getAuthors(req, res) {
        let sql = 'select * from autor order by autor';
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

    static getAuthor(req, res) {
        let sql = `select * from autor where idAutor = ${req.params.id}`
        conn.query(sql, (err, rows) => {
            if (err) {
                res.status(422).json(err)
            } else {
                res.status(200).json(rows.rows);
            }
        })
    }

    static registerAuthor(req, res) {
        const { autor } = req.body

        // validations
        if (!autor) {
            res.status(422).json({ message: 'A autor é obrigatório!' })
            return
        }

        let sql = `insert into
                            autor(
                                autor
                            )
                            values( 
                                '${autor}'
                        )`;

        conn.query(sql, (err, rows) => {
            if (err) {
                res.status(422).json(err);
            } else {
                res.status(200).json({ status: 'cadastro feito' })
            }
        })
    }

    static deleteAuthor(req, res) {
        let sql = `delete from autor where idAutor = ${req.params.id}`;
        conn.query(sql, (err, rows) => {
            if (err) {
                res.status(422).json(err);
            } else {
                res.status(200).json({ status: 'Autor deletado' })
            }
        })
    }

    static editAuthor(req, res) {
        const { id } = req.params;
        const { categoria } = req.body;

        let sql = `update autor set
                        autor = '${autor}'
                    where 
                        idAutor = '${id}'`

        conn.query(sql, (err, rows) => {
            if (err) {
                res.status(422).json({
                    messege: err
                });
            } else {
                res.status(200).json({ status: 'Autor alterado' })
            }
        })
    }
}

module.exports = AuthorController;