import { Component, OnInit } from '@angular/core';
import { DlgTextBoxService } from 'src/app/components/dlg-text-box/dlg-text-box.service';
import { SacService } from './services/sac.service';

@Component({
  selector: 'app-ctn-sac',
  templateUrl: './ctn-sac.component.html',
  styleUrls: ['./ctn-sac.component.scss']
})
export class CtnSacComponent implements OnInit {

  listServices:any[] = [];
  constructor(
    private _sac:SacService,
    private _texBox:DlgTextBoxService
  ) { 
    this.loadServices();
  }

  ngOnInit(): void {
  }

  loadServices(){
    this._sac.onGetServices().subscribe({
      next: data => {
        this.listServices = data;
      }
    })
  }

  addService(){
    this._texBox.show("Ingrese el nuevo servicio").afterClosed().subscribe(
      res=>{
        if (res){
          this._sac.onInsertService(res).subscribe({
            next: data =>{
              this.listServices.push(data);
            },error: ()=>{
              alert('No se pudo realizar el registro');
            }
          });
        }
      }
    );
  }

  updateService(serv:any){
    this._texBox.show("Modique no nombre del servicio", serv.description).afterClosed().subscribe(
      res=>{
        if (res){
          this._sac.onUpdateService(serv.id, res).subscribe({
            next: data =>{
              serv.description = res;
            },error: ()=>{
              alert('No se pudo realizar el registro');
            }
          });
        }
      }
    );
  }
}
