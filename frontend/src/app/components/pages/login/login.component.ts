import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService, Login } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = {
    email: '',
    senha: ''
  }


  constructor(private loginService: LoginService, private toast: ToastrService, private router: Router) { }

  ngOnInit(): void {

    if (this.loginService.getToken() && this.loginService.getToken() != undefined) {
      this.router.navigate(['welcome'])
    }
    if (this.loginService.getToken() == undefined) {
      localStorage.removeItem('token');
    }

  }

  submit() {
    this.loginService.login(this.login).then(
      res => {
        if (!res || res == undefined) {
          this.toast.error("Erro no login, usuário(a) ou senha inválidos")
        } else {
          this.toast.success("Login efetuado com sucesso!");
        }
      }

    )
 
  }

}

