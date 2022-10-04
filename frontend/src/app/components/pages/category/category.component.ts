import { Component, OnInit } from '@angular/core';
import { CategoryService, Categoria } from 'src/app/services/category.service';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  getCategory!: Categoria[];

  public perfil:boolean = false;
  constructor( private CategoryService: CategoryService, private Router: Router) { }
 
  ngOnInit(): void {
    this.listCategory();
    this.verificaPerfil();
  }

  listCategory(){
    this.CategoryService.getCategories().subscribe(
      res => {
        this.getCategory = <any>res;
      },err => console.log(err)
    )
  }

  deletarCategoria(id: any) {
    this.CategoryService.deleteCategory(id).subscribe(
      res => {
        console.log('Autor deletado');
        this.listCategory();
      },
      err => console.log(err)
    );
  }


  verificaPerfil(){
    const perfil = sessionStorage.getItem('perfil')
    if(perfil == 'Administrador'){
      this.perfil = true;  
    }
  }
  
}
