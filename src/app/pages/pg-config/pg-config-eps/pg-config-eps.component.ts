import { Component, OnInit } from '@angular/core';
import { EpsService } from './services/eps.service';

@Component({
  selector: 'app-pg-config-eps',
  templateUrl: './pg-config-eps.component.html',
  styleUrls: ['./pg-config-eps.component.scss']
})
export class PgConfigEpsComponent implements OnInit {

  listEPS:any[] = [];

  constructor(
    private _eps:EpsService
  ) {
    this.loadEPS();
  }

  ngOnInit(): void {
  }

  loadEPS(){
    this._eps.onGetEPS().subscribe({
      next: data=>{
        this.listEPS = data;
      }, error:()=>{

      }
    })
  }

}
