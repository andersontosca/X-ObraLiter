import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { QuizService, Quiz, Quiz2 } from 'src/app/services/quiz.service';
import { AuthorService, Autor } from 'src/app/services/author.service';
import { CategoryService, Categoria } from 'src/app/services/category.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'; 
import { UsuarioService, Usuario } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  @ViewChild('name') nameKey!: ElementRef;
  
  
 
  usuario!: Usuario[];
  getQuiz!: Quiz[];
  getAuthor!: Autor[];
  getCategory!: Categoria[];

  quiz: Quiz2 = {
    idQuiz: '',
    idAutor: '',
    idCategoria: '',
    idUsuario: '',
    obra: '',
    titulo: '',
    status: true,
    descricao: ''
  }

  public perfil:boolean = false;
  constructor(
    private UsuarioService: UsuarioService,
    private QuizService: QuizService,
    private AuthorService: AuthorService,
    private CategoryService: CategoryService,
    private Router: Router,
    private toast: ToastrService
  ) { }

  ngOnInit(): void {    
    this.listQuiz();
    this.listUsers();    
    this.listAuthor();
    this.listCategory();
    this.verificaPerfil();
  }

  listUsers() {
    this.UsuarioService.getUsuarios().subscribe(
      res => {
        this.usuario = <any>res;
      },
      err => console.log(err)
    )
  }

  listQuiz() {
    this.QuizService.getQuizzes().subscribe(
      res => {
        this.getQuiz = <any>res;
      }, err => console.log(err)
    )
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

  alterarStatus(id: any) {
    if (id) {
      this.QuizService.getQuiz(id).subscribe(
        (res: any) => {
          this.quiz = res[0];
          if (this.quiz.status == <any>true) {
            this.quiz.status = <any>false
          }
          else {
            this.quiz.status = <any>true
          }
          this.QuizService.updateQuiz(id, this.quiz).subscribe(
            _ => {
              this.toast.success("Status atualizado com sucesso!");
              this.listQuiz();
            },
            err => console.log(err)
          );
        },
        err => console.log(err)
      )
    }
  }

  
  verificaPerfil(){
    const perfil = sessionStorage.getItem('perfil')
    if(perfil == 'Administrador'){
      this.perfil = true;  
    }
  }


  startQuiz() {
    sessionStorage.setItem("nome", this.nameKey.nativeElement.value)
  }
}
