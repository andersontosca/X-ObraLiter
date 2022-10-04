import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  url = '/api/ranking'
  constructor( private http: HttpClient  ) { }


  getUsuarios() {
    return this.http.get(this.url);
  }
}

export interface Usuario {
  idusuario:'',
  nome: '',
  email: '',
  uf: '',
  apelido: '',
  senha: '',
  status: null,
  perfil: 'Usuario',
  pontos: '0'
}