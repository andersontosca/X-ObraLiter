import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService, Autor } from 'src/app/services/author.service';
import { CategoryService, Categoria } from 'src/app/services/category.service';
import { QuizService, Quiz, Quiz2 } from 'src/app/services/quiz.service';
import { QuestionService, Question } from 'src/app/services/question.service';
import { AnswerService, Answer } from 'src/app/services/answer.service';


@Component({
  selector: 'app-register-quiz',
  templateUrl: './register-quiz.component.html',
  styleUrls: ['./register-quiz.component.css']
})
export class RegisterQuizComponent implements OnInit {

  getAuthor!: Autor[];
  getCategory!: Categoria[];

  quiz: Quiz = {
    idquiz: '',
    idautor: '',
    autor: '',
    idcategoria: '',
    categoria: '',
    idusuario: '',
    obra: '',
    titulo: '',
    status: true,
    descricao: ''
  };

  quiz2: Quiz2 = {
    idQuiz: '',
    idAutor: '',
    idCategoria: '',
    idUsuario: '',
    obra: '',
    titulo: '',
    status: true,
    descricao: ''
  };

  question: Question = {
    idPergunta: '',
    idQuiz: '',
    pergunta: '',
    ajuda: 'null',
    status: true,
    avaliacao: '0'
  };

  answer: Answer = {
    idResposta: '',
    idPergunta: '',
    resposta: [],
    status: []
  };

  constructor(
    private AuthorService: AuthorService,
    private CategoryService: CategoryService,
    private QuestionService: QuestionService,
    private QuizService: QuizService,
    private AnswerService: AnswerService,
    private Router: Router
  ) { }

  ngOnInit(): void {
    this.listAuthor();
    this.listCategory();
  }

  listAuthor() {
    this.AuthorService.getAuthor().subscribe(
      res => {
        this.getAuthor = <any>res;
      }, err => console.log(err)
    )
  }

  listCategory() {
    this.CategoryService.getCategories().subscribe(
      res => {
        this.getCategory = <any>res;
      }, err => console.log(err)
    )
  }

  registerQuiz() {
    this.quiz2.idQuiz = <any>Math.floor(Math.random() * 999 + 1);
    this.quiz2.idUsuario = <any>sessionStorage.getItem('id');

    sessionStorage.setItem('idquiz', this.quiz2.idQuiz);

    this.QuizService.registerQuiz(this.quiz2).subscribe(
      _ => {
        console.log('deu bom')
        this.registerQuestion()
      },
      err => console.log(err),
    );
  }

  registerQuestion() {

    this.question.idPergunta  = <any>Math.floor(Math.random() * 999 + 1);
    this.question.idQuiz = <any> sessionStorage.getItem('idquiz');

    sessionStorage.setItem('idpergunda', this.question.idPergunta);

    this.QuestionService.registerQuestion(this.question).subscribe(
      _ => {
        console.log('deu bom')
        this.registerAnswer(); 
      },
      err => console.log(err),
    );
  }

  registerAnswer() {

    this.answer.idResposta = <any>Math.floor(Math.random() * 999 + 1);
    this.answer.idPergunta = <any>sessionStorage.getItem('idpergunda')

    this.AnswerService.registerAnswer(this.answer).subscribe(
      _ => {
        console.log('deu bom')
        this.Router.navigate(['/quiz']);
      },
      err => console.log(err),
    );
  }

  /* registerAll() {
    this.registerQuiz;
    this.registerQuestion;
    this.registerAnswer;
  }
 */
}
