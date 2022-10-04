import { Component, OnInit } from '@angular/core';
import { AuthorService, Autor } from 'src/app/services/author.service';
import { Router } from  '@angular/router'; 

@Component({
  selector: 'app-register-author',
  templateUrl: './register-author.component.html',
  styleUrls: ['./register-author.component.css']
})
export class RegisterAuthorComponent implements OnInit {

  Autor: Autor = {
    idautor: '',
    autor: ''
  } 

  constructor( 
        private AuthorService: AuthorService, private Router: Router) { }
 
  ngOnInit(): void {
    
  }

  registrarAutor() {
    this.AuthorService.registerAuthor(this.Autor).subscribe(
      res => {
        console.log('deu bom'),
          this.Router.navigate(['/author']);
      },
      err => console.log(err),
    );
  }

}
