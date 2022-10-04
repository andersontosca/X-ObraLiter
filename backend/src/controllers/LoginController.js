const conn = require('../config/conexao')
//const bcrypt = require('bcrypt');
const crypto = require('crypto');
const session = require('express-session');

class LoginController {
    static async login(req, res) {

        const { email, senha } = req.body;

        const secret = 'azaqws-_-6ffdre<*>falkdoasd';
        const senhaHash = crypto.createHash('sha256', secret).update(senha).digest('hex');

        let sql = `select * from usuario where email = '${email}' and senha = '${senhaHash}'`;
        conn.query(sql, (err, rows) => {
            if (err) {
                res.status(422).json('err')
                return
            } else {
                res.status(200).json(rows.rows);
                return
            }

            /* if (err) {
                res.status(422).json(err)
                return
            } if (rows.rowCount > 0) {
                res.status(200).json(rows.rows);
                return 
            } else {
                res.status(200).json(false);
            } */

        });
    }
}



module.exports = LoginController