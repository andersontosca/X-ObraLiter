import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url = '/api/categoria';
  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get(this.url);
  }

  getCategory(id: string) {
    return this.http.get(this.url + '/' + id); 
  }

  registerCategory(categoria: Categoria) {    
    return this.http.post(this.url, categoria);
  }

  deleteCategory(id: string) {
    return this.http.delete(this.url + '/' + id);
  }

  updateUsuario(id: string, categoria: Categoria) {
    return this.http.put(this.url + '/' + id, categoria); 
  }
}

export interface Categoria {
  idcategoria?:'',
  categoria?:''  
}
