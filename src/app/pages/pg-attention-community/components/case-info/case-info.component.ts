import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NvMessageBoxService } from 'ng-nova';
import { ApiCasesService } from 'src/app/api/cases/api-cases.service';
import { ICaseGet } from 'src/app/api/cases/Interfaces/ICase';
import { DlgParagraphBoxService } from 'src/app/components/dlg-paragraph-box/dlg-paragraph-box.service';
import { DlgPersonService } from 'src/app/components/dlg-person/dlg-person.service';
import { DlgTextBoxService } from 'src/app/components/dlg-text-box/dlg-text-box.service';

@Component({
  selector: 'app-case-info',
  templateUrl: './case-info.component.html',
  styleUrls: ['./case-info.component.scss']
})
export class CaseInfoComponent implements OnInit {

  stop:boolean = false;
  constructor(
    private _matDialogRef:MatDialogRef<CaseInfoComponent>,
    private _textBox:DlgTextBoxService,
    private _paragraphBox:DlgParagraphBoxService,
    private _apiCases:ApiCasesService,
    private _messageBox:NvMessageBoxService,
    private _dlgPeron:DlgPersonService,
    @Inject(MAT_DIALOG_DATA) public caseInfo:ICaseGet
  ) { 
    console.log(caseInfo);
  }

  ngOnInit(): void {
  }

  addObservation(){
    this._paragraphBox.show("Escriba la observación").afterClosed().subscribe(
      res=>{
        if (res){
          this.stop = true;
          this._apiCases.insertObservation( this.caseInfo.id ,res).subscribe({
            next: data=>{
              this.caseInfo.observations.push(data); this.stop = false;
            },error: ()=>{
              this._messageBox.error("No se pudeo realizar el registroo"); this.stop = false;
            }
          });
        }
      },
    );
  }

  editObservation(data:any){
    this._paragraphBox.show("Editar", data.content).afterClosed().subscribe(
      res=>{
        if (res){
          this.stop = true;
          this._apiCases.observationUpdate(data.id, res).subscribe({
            next: ()=>{
              data.content = res; this.stop = false;
            },error: ()=>{
              this._messageBox.error("No se pudo modificar el comentario");
              this.stop = false;
            }
          })
        }
      }
    );
  }

  deleteObservation(data:any){
    this._messageBox.alert("Una vez ejecuta no se podra recuperar la informacion", "¿De elimiar el comentario?", {confirm: true})
    .afterClosed().subscribe(
      res=>{
        if (res){
          this.stop = true;
          this._apiCases.observationDelete(data.id).subscribe({
            next: ()=>{
              let id = this.caseInfo.observations.findIndex(x=>x==data);
              this.caseInfo.observations.splice(id,1);
              this.stop = false;
            },error: ()=>{
              this._messageBox.error("No se pudo realizar la eliminación");
              this.stop = false;
            }
          })
        }
      }
    )
  }

  editUser(){
    this._dlgPeron.edit(this.caseInfo.dni);
  }

}
