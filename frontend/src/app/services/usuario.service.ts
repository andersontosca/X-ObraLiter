import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = '/api/usuario'
  constructor(private http: HttpClient) { }

  getUsuarios() {
    return this.http.get(this.url);
  }

  getUsuario(id: string) {
    return this.http.get(this.url + '/' + id);
  }

  addUsuario(usuario: Usuario) {    
    return this.http.post(this.url, usuario);
  }

  deleteUsuario(id: string) {
    return this.http.delete(this.url + '/' + id);
  }

  updateUsuario(id: string, usuario: Usuario) {
    return this.http.put(this.url + '/' + id, usuario); 
  }

  alterarStatus(id: string, usuario: Usuario) {
    return this.http.put(this.url + '/' + id, usuario); 
  }
}

export interface Usuario { 
  idusuario:'',
  nome: '',
  email: '',
  uf: '',
  apelido: '',
  senha: '',
  status: false,
  perfil: 'Usuario',
  pontos: '0'
}

