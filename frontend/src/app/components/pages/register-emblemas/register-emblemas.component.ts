import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-emblemas',
  templateUrl: './register-emblemas.component.html',
  styleUrls: ['./register-emblemas.component.css']
})
export class RegisterEmblemasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.verificarUser()
  }

  verificarUser() {
    const userPerfil = sessionStorage.getItem('perfil')
    if (userPerfil == 'Usuario') {
      localStorage.clear();
      sessionStorage.clear();
      window.location.reload();
    }
  }

}
