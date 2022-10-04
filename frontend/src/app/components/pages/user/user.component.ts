import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UsuarioService, Usuario } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  //@ViewChild('name') nameKey!: ElementRef;

  getUser!: Usuario[];

  usuario: Usuario = {
    idusuario: '',
    nome: '',
    email: '',
    uf: '',
    apelido: '',
    senha: '',
    status: <any>false,
    perfil: 'Usuario',
    pontos: '0'
  }

  constructor(private UsuarioService: UsuarioService, private router: Router, private toast: ToastrService) { }

  ngOnInit(): void {
    this.listUsers();
    this.verificarUser()
  }

  listUsers() {
    this.UsuarioService.getUsuarios().subscribe(
      res => {
        this.getUser = <any>res;
      },
      err => console.log(err)
    )
  }

  alterarStatus(id: any) {
    if (id) {
      this.UsuarioService.getUsuario(id).subscribe(
        (res: any) => {
          this.usuario = res[0];
          if (this.usuario.status == <any>true) {
            this.usuario.status = <any>false
          }
          else {
            this.usuario.status = <any>true
          }

          this.UsuarioService.updateUsuario(id, this.usuario).subscribe(
            _ => {
              this.toast.success("Status atualizado com sucesso!");
              this.listUsers();
            },
            err => console.log(err)
          );
        },
        err => console.log(err)
      )
    }
  }

  alterarPerfil(id: any) {
    if (id) {
      this.UsuarioService.getUsuario(id).subscribe(
        (res: any) => {
          this.usuario = res[0];
          if (this.usuario.perfil == <any>'Usuario') {
            this.usuario.perfil = <any>'Administrador';
            //sessionStorage.setItem('perfil', 'Administrador');
          }
          else {
            this.usuario.perfil = <any>'Usuario'
            //sessionStorage.setItem('perfil', 'Usuario');
          }

          this.UsuarioService.updateUsuario(id, this.usuario).subscribe(
            _ => {
              this.toast.success("Status atualizado com sucesso aqui!");
              this.listUsers();
              window.location.reload();
            },
            err => console.log(err)
          );
        },
        err => console.log(err)
      )
    }
  }

  verificarUser() {
    const userPerfil = sessionStorage.getItem('perfil')
    if (userPerfil == 'Usuario') {
      localStorage.clear();
      sessionStorage.clear();
      window.location.reload();
    }
  }

  alterarUsuario(id: any) {
    this.router.navigate(['/updateUser/' + id],)
  }
}
