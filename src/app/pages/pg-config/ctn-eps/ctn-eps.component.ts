import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DlgEpsInfoComponent } from './dlg-eps-info/dlg-eps-info.component';
import { EpsService } from './services/eps.service';

@Component({
  selector: 'app-ctn-eps',
  templateUrl: './ctn-eps.component.html',
  styleUrls: ['./ctn-eps.component.scss']
})
export class CtnEpsComponent implements OnInit {

  listEPS:any[] = [];

  constructor(
    private _eps:EpsService,
    private _matDialog:MatDialog
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

  addEPS(){
    this._matDialog.open(DlgEpsInfoComponent).afterClosed().subscribe(
      res =>{
        if (res){
          this.listEPS.push(res);
        }
      }
    );

  }

  editEPS(eps:any){
    this._matDialog.open(DlgEpsInfoComponent,{ data:eps });
  }
  showEPS(){
    this._matDialog.open(DlgEpsInfoComponent);
  }
}
