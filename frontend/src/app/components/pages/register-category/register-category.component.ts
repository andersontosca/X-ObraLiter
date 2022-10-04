import { Component, OnInit } from '@angular/core';
import { CategoryService, Categoria } from 'src/app/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-category',
  templateUrl: './register-category.component.html',
  styleUrls: ['./register-category.component.css']
})
export class RegisterCategoryComponent implements OnInit {

  Category: Categoria = {
    idcategoria: '',
    categoria: ''
  }

  constructor(private CategoryService: CategoryService, private Router: Router) { }

  ngOnInit(): void {
  }

  registrarCategoria() {
    this.CategoryService.registerCategory(this.Category).subscribe(
      _ => {
        console.log('deu bom'),
          this.Router.navigate(['/category']);
      },
      err => console.log(err),

    );
  }


};



