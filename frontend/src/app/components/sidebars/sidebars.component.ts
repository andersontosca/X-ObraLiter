import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebars',
  templateUrl: './sidebars.component.html',
  styleUrls: ['./sidebars.component.css']
})
export class SidebarsComponent implements OnInit {

  constructor() { }

  public perfil:boolean = false;
  ngOnInit(): void {
    this.verificaPerfil()
  }

  
  verificaPerfil(){
    const perfil = sessionStorage.getItem('perfil')
    if(perfil == 'Administrador'){
      this.perfil = true;  
    }
  }
}
