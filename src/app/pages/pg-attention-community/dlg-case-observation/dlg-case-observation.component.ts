import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NvMessageBoxService } from 'ng-nova';
import { CasesService } from '../services/cases.service';

@Component({
  selector: 'app-dlg-case-observation',
  templateUrl: './dlg-case-observation.component.html',
  styleUrls: ['./dlg-case-observation.component.scss']
})
export class DlgCaseObservationComponent implements OnInit {

  content:string = "";

  constructor(
    private matDialogRef:MatDialogRef<DlgCaseObservationComponent>,
    @Inject(MAT_DIALOG_DATA) public idCase:number,
    private _case:CasesService,
    private _message:NvMessageBoxService
  ) { }

  ngOnInit(): void {
  }

  close(){
    if (this.content != ""){
      this._message.show("", '¿Salir sin guardar cambios?', { confirm: true, disableClose:true}).afterClosed().subscribe(
        res=>{
          if (res){
            this.matDialogRef.close();
          }
        }
      )
    }else{
      this.matDialogRef.close();
    }
  }

  send(){
    this._case.onRegisterObservation(this.idCase, this.content).subscribe({
      next: data => {
        this.matDialogRef.close(data);
      },error:()=>{
        this._message.error("No se pudo registar el comentarios");
      }
    });
  }

}
