import { Component, OnInit } from '@angular/core';
import { RankingService, Usuario } from 'src/app/services/ranking.service'; 


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  getUser!: Usuario[];
  constructor(private RankingService: RankingService) { 
  }

  nome:any = sessionStorage.getItem('nome');
  email:any = sessionStorage.getItem('email');
  pontos:any = sessionStorage.getItem('pontos');
  apelido:any = sessionStorage.getItem('apelido');

  ngOnInit(): void {
    this.listUser()
  }

  listUser(){
    this.RankingService.getUsuarios().subscribe( 
      res => {
        this.getUser = <any>res;
      },
      err => console.log(err)
    )
  }
}
