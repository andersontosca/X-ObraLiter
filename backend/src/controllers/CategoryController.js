const conn = require("../config/conexao");

class CategoryController {

    static getCategories(req, res) {
        let sql = 'select * from categoria order by categoria';
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

    static getCategory(req, res) {
        let sql = `select * from categoria where idCategoria = ${req.params.id}`
        conn.query(sql, (err, rows) => {
            if (err) {
                res.status(422).json(err)
            } else {
                res.status(200).json(rows.rows);
            }
        })
    }

    static registerCategory(req, res) {
        const { categoria } = req.body

        // validations
        if (!categoria) {
            res.status(422).json({ message: 'A categoria é obrigatória!' })
            return
        }

        let sql = `insert into
                            categoria(
                                categoria
                            )
                            values( 
                                '${categoria}'
                        )`;

        conn.query(sql, (err, rows) => {
            if (err) {
                res.status(422).json(err);
            } else {
                res.status(200).json({ status: 'cadastro feito' })
            }
        })
    }

    static deleteCategory(req, res) {
        let sql = `delete from categoria where idCategoria = ${req.params.id}`;
        conn.query(sql, (err, rows) => {
            if (err) {
                res.status(422).json(err);
            } else {
                res.status(200).json({ status: 'categoria deletada' })
            }
        })
    }

    static editCategory(req, res) {
        const { id } = req.params;
        const { categoria } = req.body;

        let sql = `update categoria set
                        categoria = '${categoria}'
                    where 
                        idCategoria = '${id}'`

        conn.query(sql, (err, rows) => {
            if (err) {
                res.status(422).json({
                    messege: err
                });
            } else {
                res.status(200).json({ status: 'Categoria alterado' })
            }
        })
    }
}


module.exports = CategoryController;