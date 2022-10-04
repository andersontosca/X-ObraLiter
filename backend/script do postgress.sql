CREATE DATABASE "x_obra_liter" WITH OWNER = postgres ENCODING = 'UTF8' CONNECTION
LIMIT
    = -1;

drop table usuario cascade

CREATE TABLE IF NOT EXISTS usuario (
    idUsuario SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    apelido VARCHAR(100) NOT NULL,
    uf VARCHAR(2) NOT NULL,
    senha VARCHAR(100) NOT NULL,
    status BOOLEAN default null,
    perfil VARCHAR(15) default 'usuario',  
    pontos DOUBLE PRECISION default 0
);

select * from quiz

delete  from quiz where idquiz=5

CREATE table IF NOT EXISTS autor(
    idAutor SERIAL PRIMARY KEY,
    autor VARCHAR(45) NOT NULL
);

CREATE TABLE IF NOT EXISTS categoria (
    idCategoria SERIAL PRIMARY KEY,
    categoria VARCHAR(45) NOT NULL
);

CREATE TABLE IF NOT EXISTS quiz(
    idQuiz INT PRIMARY KEY,
    idAutor INT NOT NULL,
    idCategoria INT NOT NULL,
    idUsuario INT NOT NULL,
    obra VARCHAR(200) NOT NULL,
    titulo VARCHAR(100) NOT NULL,
    status BOOLEAN NOT NULL,
    descricao VARCHAR(1000) NOT NULL,
    FOREIGN KEY(idAutor) REFERENCES autor (idAutor),
    FOREIGN KEY(idCategoria) REFERENCES categoria (idCategoria),
    FOREIGN KEY(idUsuario) REFERENCES usuario(idUsuario)
);

drop table quiz cascade;
drop table pergunta cascade;
drop table resposta cascade;

CREATE TABLE IF NOT EXISTS pergunta (
    idPergunta INT PRIMARY KEY,
    idQuiz INT NOT NULL,
    pergunta VARCHAR(200) NOT NULL,
    ajuda VARCHAR (200) NOT NULL,
    status BOOLEAN NOT NULL,
    avaliacao DOUBLE PRECISION NOT NULL,
    FOREIGN KEY(idQuiz) REFERENCES quiz (idQuiz)
);


CREATE TABLE IF NOT EXISTS resposta (
    idResposta INT PRIMARY KEY,
    idPergunta INT,
    resposta VARCHAR (200) NOT NULL,
    status BOOLEAN NOT NULL,
    FOREIGN KEY(idPergunta) REFERENCES pergunta (idPergunta)
);

select * from usuario

CREATE TABLE IF NOT EXISTS embremas (
    idEmbrema SERIAL PRIMARY KEY NOT NULL,
    foto VARCHAR NOT NULL,
    titulo VARCHAR(100) NOT NULL,
    descricao VARCHAR(250) NOT NULL,
    status BOOLEAN NOT NULL,
    pontuacao DOUBLE PRECISION NOT NULL
);

CREATE TABLE IF NOT EXISTS embrema_criterio(
    idEmbremaCriterio SERIAL PRIMARY KEY,
    idEmbrema INT NOT NULL,
    qtdeQuiz DOUBLE PRECISION NOT NULL,
    qtdeAutor DOUBLE PRECISION NOT NULL,
    qtdeObra DOUBLE PRECISION NOT NULL,
    FOREIGN KEY(idEmbrema) REFERENCES embremas(idEmbrema)
);

CREATE TABLE IF NOT EXISTS usuario_embremas(
    idUsuarioEmbrema SERIAL PRIMARY KEY NOT NULL,
    idUsuario INT NOT NULL,
    idEmbrema INT NOT NULL,
    qtdePontos DOUBLE PRECISION NOT NULL,
    FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario),
    FOREIGN KEY (idEmbrema) REFERENCES embremas (idEmbrema)
);

INSERT INTO categoria (categoria)
VALUES ('DADOS DO AUTOR')
,
       ('ÉPICO'),
       ('DRAMÁTICO');
    
INSERT INTO autor (autor) VALUES ('CLARICE LISPECTOR'),('MACHADO DE ASSIS'),('CECÍLIA MEIRELES');

INSERT INTO usuario (nome,email,apelido,uf,senha,status,perfil,pontos)
VALUES  ('isaac','isaac@gmail.com','isaac','DF','123456',true,0,'0');

INSERT INTO quiz (idAutor,idCategoria,idUsuario,obra,titulo,status,descricao)
VALUES  (2,4,1,'Dados Machado de Assis','História',true, 'Mostre o quanto você conhece o autor!!'); 

INSERT INTO quiz (idAutor,idCategoria,idUsuario,obra,titulo,status,descricao)
VALUES  (1,1,3,'A Hora da Estrela','Conheça a Obra',true, 'Conheça mais sobre a autora!!');

INSERT INTO quiz (idAutor,idCategoria,idUsuario,obra,titulo,status,descricao)
VALUES  (3,2,3,'O Instante Existe','Explore a Obra',true, 'Explore seus conhecimentos!!');



select * from categoria

INSERT INTO pergunta (idQuiz,pergunta,ajuda,status, avaliacao)
VALUES  (3,'Which of the following does TypeScript use to specify types?','TS uses a colon (:) to separate the property name from the property type',true,0),
        (3,'Which of the following is NOT a type used in TypeScript?','enum is not used as a type in TypeScript',true,0),
        (3,'How can we specify properties and methods for an object in TypeScript?','interfaces are typically used to list the properties and methods for an object',true,0);

INSERT INTO resposta (idPergunta,resposta,status)
VALUES  (8,':',true),
        (8,';',false),
        (8,'!',false),
        (8,'&',false),

        (9,'number',false),
        (9,'string',false),
        (9,'boolean',false),
        (9,'enum',true),

        (10,'Use classes',false),
        (10,'Use interfaces',true),
        (10,'Use enums',false),
        (10,'Use async/await.',false);



'{"question":{
"Id":"8724580",
"name":"Key West",
"Lat":"24.5508",
"lon":"-81.8081"},
"Data":[{
"t":"2020-09-24 04:18",
"s":"0.005", "f":"1,0,0,0", "q":"p"}]}'


select * from categoria


SELECT * 
FROM quiz 
INNER JOIN autor ON autor.idautor = quiz.idautor
INNER JOIN categoria ON categoria.idcategoria = quiz.idcategoria;



SELECT quiz.titulo, pergunta.pergunta, resposta.resposta,resposta.status
FROM quiz 
INNER JOIN pergunta ON quiz.idQuiz = pergunta.idQuiz
INNER JOIN resposta ON pergunta.idPergunta = resposta.idPergunta;



  
select * from autor;

drop table usuario;


select titulo from quiz where idquiz = 3
union
select pergunta  from pergunta as pergunta where idquiz = 3 and idpergunta = 8
union
select resposta   from resposta as resposta  where idpergunta = 8

------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS pergunta2 (
    idPergunta SERIAL PRIMARY KEY,
    idQuiz INT NOT NULL,
    pergunta VARCHAR(200) NOT NULL,
    resposta  jsonb NOT NULL, 
    ajuda VARCHAR (200) NOT NULL,
    status BOOLEAN NOT NULL,
    avaliacao DOUBLE PRECISION NOT NULL,
    FOREIGN KEY(idQuiz) REFERENCES quiz (idQuiz)
);

CREATE INDEX gin_index ON pergunta2 USING gin (resposta);
drop table pergunta2

CREATE TABLE IF NOT EXISTS pergunta2 (
    idPergunta SERIAL PRIMARY KEY,
    idQuiz INT NOT NULL,
    pergunta VARCHAR(200) NOT NULL,
    resposta  jsonb NOT NULL, 
    ajuda VARCHAR (200) NOT NULL,
    status BOOLEAN NOT NULL,
    avaliacao DOUBLE PRECISION NOT NULL,
    FOREIGN KEY(idQuiz) REFERENCES quiz (idQuiz)
);

CREATE INDEX gin_index ON pergunta2 USING gin (resposta);


INSERT INTO pergunta2 (idQuiz,pergunta,resposta,ajuda,status,avaliacao)
VALUES  (3,
		 'Which of the following does TypeScript use to specify types?',
		 '[
		 {
			 	"A":"asdasd","A":"asdasd",
				"B":"asdasd","B":"asdasd",
				"C":"asdasd","C":"asdasd",
				"D":"asdasd","D":"asdasd"
		 },
		 	 {
			 	"A":"asdasd","A":"asdasd",
				"B":"asdasd","B":"asdasd",
				"C":"asdasd","C":"asdasd",
				"55":"asdasd","D":"asdasd"
		 }
		 
		 ]',
		 'TS uses a colon (:) to separate the property name from the property type',
		 true,
		 0);
        (3,'Which of the following is NOT a type used in TypeScript?','enum is not used as a type in TypeScript',true,0),
        (3,'How can we specify properties and methods for an object in TypeScript?','interfaces are typically used to list the properties and methods for an object',true,0);

select * from pergunta2