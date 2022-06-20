import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/User';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<User>();
  @Input() userData: User | null = null;
  @Input() btnText!: string;

  userForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      //dateBirth: new FormControl('', [Validators.required]),
      uf: new FormControl('', [Validators.required]),
      surName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
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
  get confirmPassword() {
    return this.userForm.get('confirmPassword')!;
  }

  get status() {
    return this.userForm.get('status')!;
  }



  submit() {
    if (this.userForm.invalid) {
      return;
    }

    console.log(this.userForm.value);

    this.onSubmit.emit(this.userForm.value);
  }


}
