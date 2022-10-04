import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emblemas',
  templateUrl: './emblemas.component.html',
  styleUrls: ['./emblemas.component.css']
})
export class EmblemasComponent implements OnInit {

  public perfil: boolean = false;
  public perfilUser: boolean = false;


  public ouro: boolean = false
  public prata: boolean = false
  public bronze: boolean = false

  public mensagem: boolean = false;

  ngOnInit(): void {
    this.verificaPerfil();

    this.verificaEmbremas();
  }


  verificaPerfil(): any {
    const perfil = sessionStorage.getItem('perfil')
    if (perfil == 'Administrador') {
      return this.perfil = true;
    }
    if (perfil == 'Usuario') {
      return this.perfilUser = true;
    }
    
  }



  verificaEmbremas() {
    const pontos = <any>sessionStorage.getItem('pontos');
    if(pontos < 1500){
      this.mensagem = true;
    }
    if (pontos >= 1500) {
      this.bronze = true;
    }
    if (pontos >= 2500) {
      this.prata = true;
    }
    if (pontos >= 3500) {
      this.ouro = true;
    }
  }

}
