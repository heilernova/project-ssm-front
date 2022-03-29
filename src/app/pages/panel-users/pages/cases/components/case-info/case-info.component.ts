import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NvMessageBoxService } from 'ng-nova';
import { ApiCasesService } from 'src/app/api/cases/api-cases.service';
import { DlgParagraphBoxService } from 'src/app/components/dlg-paragraph-box/dlg-paragraph-box.service';
import { PersonService } from 'src/app/components/person/person.service';
import { ICaseData } from '../../interfaces/Icase';

@Component({
  selector: 'app-case-info',
  templateUrl: './case-info.component.html',
  styleUrls: ['./case-info.component.scss']
})
export class CaseInfoComponent implements OnInit {

  @Input() caseInfo:ICaseData|undefined = undefined;
  @Output() _close = new EventEmitter();

  stop:boolean = false;
  constructor(
    private _paragraphBox:DlgParagraphBoxService,
    private _messageBox:NvMessageBoxService,
    private _apiCases:ApiCasesService,
    private _person:PersonService
  ) { }

  ngOnInit(): void {
  }

  addObservation(){
    this._paragraphBox.show("Escriba la observación").afterClosed().subscribe(
      res=>{
        if (res){
          if (this.caseInfo){
            this.stop = true;
            this._apiCases.insertObservation( this.caseInfo.id ,res).subscribe({
              next: data=>{
                // if (this.ca)
                this.caseInfo?.observations.push(data); this.stop = false;
              },error: ()=>{
                this.stop = false;
                // this._messageBox.error("No se pudeo realizar el registroo"); this.stop = false;
              }
            });
          }
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
              let id = this.caseInfo?.observations.findIndex(x=>x==data);
              if (id){
                this.caseInfo?.observations.splice(id,1);
              }
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
    // this._dlgPeron.edit(this.caseInfo.dni);
    this._person.show(this.caseInfo?.dni).afterClosed().subscribe(res=>{
      if (res){
        console.log(res);
        if (this.caseInfo){
          this.caseInfo.name = `${res.name} ${res.lastName}`;
          this.caseInfo.age = res.age;
          this.caseInfo.sex = res.sex;
          this.caseInfo.siben = res.siben;
          this.caseInfo.dniType = res.dniType;
          this.caseInfo.address = res.address;
          this.caseInfo.cellphone = res.cellphone;
          this.caseInfo.email = res.email;
        }
      }
    });
  }

  close(){
    this._close.emit();
  }

  getNoCase():string{
    return this.caseInfo ? (this.caseInfo.id.toString().padStart(6, '0')) : '';
  }

  closeCase(){
    this._messageBox.alert("", "¿Desea cerrar el caso?").afterClosed().subscribe(
      res=>{
        if (res){
          if (this.caseInfo){

            this._apiCases.closeCase(this.caseInfo.id).subscribe({
              next: data =>{
               if (this.caseInfo) this.caseInfo.status = false;
              }
            })
          }
        }
      }
    )
  }
}
