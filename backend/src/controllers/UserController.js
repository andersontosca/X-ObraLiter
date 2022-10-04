//const bcrypt = require('bcrypt');
//const jwt = require('jsonwebtoken');

const crypto = require('crypto');


const conn = require("../config/conexao");

class UserController {

    static getUsers(req, res) {
        let sql = 'select * from usuario ORDER by idusuario;';
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





    static getUsersR(req, res) {
        let sql = 'select * from usuario order by pontos desc';
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

    static getUser(req, res) {
        let sql = `select * from usuario where idUsuario = ${req.params.id}`
        conn.query(sql, (err, rows) => {
            if (err) {
                res.status(422).json(err)
            } else {
                res.status(200).json(rows.rows);
            }
        })
    }

    static registerUser(req, res) {
        const { nome, email, apelido, uf, senha, status, perfil, pontos } = req.body

        // validations
        if (!nome) {
            res.status(422).json({ message: 'O nome é obrigatório!' })
            return
        }

        if (!email) {
            res.status(422).json({ message: 'O e-mail é obrigatório!' })
            return
        }

        if (!uf) {
            res.status(422).json({ message: 'O estado de nascimento é obrigatório!' })
            return
        }

        if (!apelido) {
            res.status(422).json({ message: 'Um apelido é obrigatório!' })
            return
        }

        if (!senha) {
            res.status(422).json({ message: 'A senha é obrigatória!' })
            return
        }

        if (!status) {
            res.status(422).json({ message: 'O status é obrigatório!' })
            return
        }


/*         function  verEmail(e_mail) {
            const e = e_mail
            let sql = `select * from usuario where email =  ${e}`;
            conn.query(sql, (err, rows) => {
                if (err) {
                    res.status(422).json(err)
                } else {
                    res.status(200).json(rows.rows);
                }   
            });
        }

        verEmail(email) */
 
        // create a password

        const secret = 'azaqws-_-6ffdre<*>falkdoasd';
        const senhaHash = crypto.createHash('sha256', secret).update(senha).digest('hex');

        let sql = `insert into
                             usuario(
                                nome,
                                email,
                                apelido,
                                uf,
                                senha,
                                status,
                                perfil,
                                pontos
                            )
                            values( 
                                '${nome}',
                                '${email}',
                                '${apelido}',
                                '${uf}',
                                '${senhaHash}',
                                '${status}',
                                '${perfil}',
                                '${pontos}'
                            )`;

        conn.query(sql, (err, rows) => {
            if (err) {
                res.status(422).json(err);
            } else {
                res.status(200).json({ status: 'cadastro feito' })
            }
        })
    }



    static deleteUser(req, res) {
        let sql = `delete from usuario where idUsuario = ${req.params.id}`;
        conn.query(sql, (err, rows) => {
            if (err) {
                res.status(422).json(err);
            } else {
                res.status(200).json({ status: 'usuario deletado' })
            }
        })
    }

    static async editUser(req, res) {
        const { id } = req.params;
        const { nome, email, apelido, uf, senha, status, perfil, pontos } = req.body;

        // password 

        const secret = 'azaqws-_-6ffdre<*>falkdoasd';
        const senhaHash = crypto.createHash('sha256', secret).update(senha).digest('hex');

        let sql = `update usuario set
                nome = '${nome}',
                email = '${email}',
                apelido = '${apelido}',
                uf = '${uf}',
                senha = '${senha}',
                status = '${status}',
                perfil = '${perfil}',
                pontos = '${pontos}'
                where idUsuario = '${id}'`

        conn.query(sql, (err, rows) => {
            if (err) {
                res.status(422).json({
                    messege: err
                });
            } else {
                res.status(200).json({ status: 'usuario alterado' })
            }
        })
    }
}


module.exports = UserController;