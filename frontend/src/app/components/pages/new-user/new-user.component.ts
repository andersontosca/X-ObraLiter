import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/User';

import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  btnText: string = 'Compartilhar!';

  constructor(
    private userService: UserService
    ) { }

    ngOnInit(): void { }

    buildForm() {}


  async createHandler(user: User) {
    debugger
    console.log('deu bom');

    const formData = new FormData();
    //formData.append("id", user.id);
    /* formData.append("name", user.name);
    formData.append("email", user.email);
    formData.append("uf", user.uf);
    formData.append("surname", user.surname);
    formData.append("password", user.password);
    formData.append("confirmpassword", user.confirmPassword); */
    //formData.append("status", user.status);

    // to do

  await this.userService.createUser(user).then(a => { 
    //debugger
    console.log(a);
  })
  
  .catch( error  => {
    //debugger
    console.log(error);
  });


    //exibir msg

    // redirect






  }
}
