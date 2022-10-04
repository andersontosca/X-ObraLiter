import { Component, OnInit } from '@angular/core';
import { RankingService, Usuario } from 'src/app/services/ranking.service';


@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  getUser!: Usuario[];

  constructor(private RankingService: RankingService) { }

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
