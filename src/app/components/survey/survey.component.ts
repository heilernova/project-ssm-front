import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiEpsService } from 'src/app/api/eps/api-eps.service';
import { ApiPersonsService } from 'src/app/api/persons/api-persons.service';
import { DlgPersonService } from '../dlg-person/dlg-person.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

  scores:string[] = ['1', '2', '3', '4', '5'];
  dni:string = '';
  form:FormGroup;
  listEPS:any[] = [];

  userName:string = "";

  constructor(
    private _apiEPS:ApiEpsService,
    private _apiPersons:ApiPersonsService,
    private _person:DlgPersonService
  ) {
    this.form = new FormGroup({
      eps: new FormControl(null,Validators.required),
      ask1: new FormControl(null, Validators.required),
      ask2: new FormControl(null, Validators.required),
      ask3: new FormControl(null, Validators.required),
      ask4: new FormControl(null, Validators.required),
      ask5: new FormControl(null, Validators.required),
      ask6: new FormControl(null, Validators.required),
      ask7: new FormControl(null, Validators.required),
      ask8: new FormControl(null, Validators.required),
      ask9: new FormControl(null, Validators.required),
      ask10: new FormControl(null, Validators.required),
      ask11: new FormControl(null, Validators.required),
      ask12: new FormControl(null, Validators.required),
    })
    this._apiEPS.getAll().subscribe({
      next: data =>{
        this.listEPS = data;
      }
    })
  }

  ngOnInit(): void {
  }

  claerResponse(id:number){
    this.form.get(`ask${id}`)?.setValue(null);
  }
  validDocument(){
    if (this.dni != ""){

      this._apiPersons.get(this.dni).subscribe({
        next: data => {
          this.userName = `${data.name} ${data.lastName}`;
        },error: ()=>{
          this._person.show(this.dni).afterClosed().subscribe(res=>{
            if (res){
              this.userName = `${res.name} ${res.lastName}`;
            }
          })
        }
      })
    }
  }
}
