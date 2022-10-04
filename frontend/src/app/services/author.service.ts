import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  url = '/api/autor';
  constructor(private http: HttpClient) { }

  getAuthor() {
    return this.http.get(this.url);
  }

  registerAuthor(author: Autor) {
    return this.http.post(this.url, author);
  }

  deleteAuthor(id: string) {
    return this.http.delete(this.url + '/' + id);
  }

}

export interface Autor {
  idautor?:'', 
  autor?:'' 
}

export interface Author {
  idautor?:'', 
  autor?:'' 
}



