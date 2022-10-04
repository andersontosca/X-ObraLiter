import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { UsuarioService, Usuario } from 'src/app/services/usuario.service';



@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  usuario: Usuario = {
    idusuario: '',
    nome: '',
    email: '',
    uf: '',
    apelido: '',
    senha: '',
    status: false,
    perfil: 'Usuario',
    pontos: '0'
  }

  id: any;

  constructor(
    private UsuarioService: UsuarioService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toast: ToastrService
  ) { }

  ngOnInit(): void {
    const id: any = sessionStorage.getItem('id');
    if (id) {
      this.UsuarioService.getUsuario(id).subscribe(
        (res: any) => {
          this.usuario = res[0];
        },
        err => console.log(err)
      );
    }
  }

  updateUser() {
    this.UsuarioService.updateUsuario(this.usuario.idusuario, this.usuario).subscribe(
      _ => {
        sessionStorage.setItem('nome', this.usuario.nome);
        sessionStorage.setItem('email', this.usuario.email);
        sessionStorage.setItem('apelido', this.usuario.apelido);
        this.toast.success('Dados atualizados com sucesso!')
        setTimeout(() => {
          window.location.reload();
        }, 2000)
      },
      err => console.log(err)
    );
    this.router.navigate(['/welcome']);
  }
}
