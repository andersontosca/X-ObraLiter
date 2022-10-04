import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/User';
import { Router } from '@angular/router';
import { UsuarioService, Usuario } from 'src/app/services/usuario.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<User>();
  // @Input() userData: User | null = null;  

  userForm!: FormGroup;

  usuario: Usuario = {
    idusuario:'',
    nome: '',
    email: '',
    uf: '',
    apelido: '',
    senha: '',
    status: false,
    perfil: 'Usuario',
    pontos: '0'
  };

  constructor(private UsuarioService: UsuarioService, private router: Router, private toast: ToastrService) { }
  ngOnInit(): void {


    this.userForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      //dateBirth: new FormControl('', [Validators.required]),
      uf: new FormControl('', [Validators.required]),
      surName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      //confirmPassword: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),

    })
  }

  get name() {
    return this.userForm.get('name')!;
  }
  get email() {
    return this.userForm.get('email')!;
  }
  get uf() {
    return this.userForm.get('uf')!;
  }
  get surName() {
    return this.userForm.get('surName')!;
  }
  get password() {
    return this.userForm.get('password')!;
  }

  get status() {
    return this.userForm.get('status')!;
  }

  adicionar() {
    console.log(this.usuario);
    if (!this.usuario.nome || !this.usuario.email || !this.usuario.uf || !this.usuario.apelido || !this.usuario.senha || !this.usuario.status ) {
      return;
    } else {

      this.UsuarioService.addUsuario(this.usuario).subscribe(
        res => {
          this.toast.success('Usuario cadastrado com sucesso!');
          this.router.navigate(['/login']);
        },
        err => console.log(err),
      );

    }
  }


  /* submit() {
     if (this.usuario.invalid) {
      return;
    } 
    console.log(this.userForm.value);
    this.adicionar.emit(this.userForm.value);

startQuiz(){
    localStorage.setItem("name", this.nameKey.nativeElement.value)
  }

  } */
}
