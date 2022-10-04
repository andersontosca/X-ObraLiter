import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
//import { TitleStrategy } from '@angular/router';
import { interval, timeout } from 'rxjs';
import { QuestionService } from 'src/app/services/question.service';
import { UsuarioService, Usuario } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  public name: string = "";
  public questionList: any = [];
  public currentQuestion: number = 0;
  public points: number = 0;
  counter = 60;
  correctAnswer: number = 0;
  inCorrectAnswer: number = 0;
  interval$: any;
  progress: string = "0";
  isQuizCompleted: boolean = false;

  getUser!: Usuario[];
  usuario: Usuario = {
    idusuario: '',
    nome: '',
    email: '',
    uf: '',
    apelido: '',
    senha: '',
    status: <any>false,
    perfil: 'Usuario',
    pontos: '0'
  }

  constructor(
    private questionService: QuestionService,
    private UsuarioService: UsuarioService,
    private router: Router,
    private toast: ToastrService
    
    ) { }

  ngOnInit(): void {
    this.name = sessionStorage.getItem("apelido")!;
    this.listUsers();
    this.getAllQuestions();
    this.startCounter();
  }

  getAllQuestions() {
    this.questionService.getQuestionJson()
      .subscribe(res => {
        this.questionList = res.questions;
      })
  }

  nextQuestion() {
    this.currentQuestion++;
  }

  previousQuestion() {
    this.currentQuestion--;
  }

  answer(currentQno: number, option: any) {
    if (currentQno === this.questionList.length) {
      this.isQuizCompleted = true;
      this.stopCounter();
    }


    if (option.correct) {
      this.points += 100;
      this.correctAnswer++;


      setTimeout(() => {
        this.currentQuestion++;
        this.resetCounter();
        this.getProgressPercent();
      }, 1000);

    } else {
      setTimeout(() => {
        this.getProgressPercent();
        this.currentQuestion++;
        this.inCorrectAnswer++;
        this.resetCounter();
      }, 1000);
      this.points -= 10;
    }
  }

  startCounter() {
    this.interval$ = interval(1000)
      .subscribe(val => {
        this.counter--;
        if (this.counter === 0) {
          this.currentQuestion++;
          this.counter = 60;
          this.points -= 10;
        }
      });
    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 600000);
  }

  stopCounter() {
    this.interval$.unsubscribe();
    this.counter = 0;
  }

  resetCounter() {
    this.stopCounter();
    this.counter = 60;
    this.startCounter();
  }

  resetQuiz() {
    this.resetCounter();
    this.getAllQuestions();
    this.points = 0;
    this.counter = 60;
    this.currentQuestion = 0;
    this.progress = "0"
    this.isQuizCompleted = false;
    // this.getRandom();
  }

  getProgressPercent() {
    this.progress = ((this.currentQuestion / this.questionList.length) * 100).toString();
    return this.progress;
  }

  
  listUsers() {
    this.UsuarioService.getUsuarios().subscribe(
      res => {
        this.getUser = <any>res;
      },
      err => console.log(err)
    )
  }

  alterarPontos() {
    const id = sessionStorage.getItem('id');
    if (id) {
      this.UsuarioService.getUsuario(id).subscribe(
        (res: any) => {
          this.usuario = res[0];
        
          this.usuario.pontos += this.points;
          sessionStorage.setItem('pontos',this.usuario.pontos)

          this.UsuarioService.updateUsuario(id, this.usuario).subscribe(
            _ => {
              this.toast.success("Pontos atualizado com sucesso aqui!");
              this.router.navigate(['welcome'])
            },
            err => console.log(err)
          );
        },
        err => console.log(err)
      )
    }
  }

  // getRandom(){
  //  return Math.floor(Math.random() * this.questionList.length);
  // }
}
