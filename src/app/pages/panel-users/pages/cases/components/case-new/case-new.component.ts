import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { map, startWith } from 'rxjs';
import { IPersonGet } from 'src/app/api/persons/interfaces/IPersonGet';
import { PersonService } from 'src/app/components/person/person.service';
import { CasesDataService } from '../../services/cases-data.service';
import { CasesService } from '../../services/cases.service';

@Component({
  selector: 'app-case-new',
  templateUrl: './case-new.component.html',
  styleUrls: ['./case-new.component.scss']
})
export class CaseNewComponent implements OnInit {

  inputDocument:FormControl = new FormControl('', Validators.required);
  user:IPersonGet | undefined;

  form:FormGroup;
  constructor(
    public _casesData:CasesDataService,
    private _cases:CasesService,
    private _person:PersonService,
    private _matDialogRef:MatDialogRef<CaseNewComponent>
  ) { 

    this.form = new FormGroup({
      dni: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      eps: new FormControl('', Validators.required),
      requiredAttention: new FormControl('', Validators.required),
      note: new FormControl('', Validators.required),
      olderAdult: new FormControl(false),
      disabled: new FormControl(false),
      pregnant: new FormControl(false),
      womenHeadHousehold: new FormControl(false),
      afrodescendent: new FormControl(false),
      lgtbi: new FormControl(false),
      victim: new FormControl(false),
      displaced: new FormControl(false),
      demobilized: new FormControl(false),
      reinserted: new FormControl(false),
      palenRaizal: new FormControl(false),
      roomGintano: new FormControl(false),
      nnaNunaccompaniedAdult: new FormControl(false)
    });

    this.inputDocument.valueChanges.subscribe(res=>{
      if (this.form.get('dni') != res){
        this.form.get('dni')?.setValue('');
        this.user = undefined;
      }
    })

    this._casesData.load();
  }
  
  ngOnInit(): void {

  }


  searchDni(){
    if (this.inputDocument.value != this.form.get('dni')?.value){

      this._cases.getInforUser(this.inputDocument.value).subscribe({
        next: data=>{
          if (data.person){
            
            this.user = data.person;

            let dataVues = {
              dni: data.person.dni ,
              eps:  data.person.eps,
              requiredAttention: null,
              note: '',
              olderAdult: false,
              disabled: false,
              pregnant: false,
              womenHeadHousehold: false,
              afrodescendent: false,
              lgtbi: false,
              victim: false,
              displaced: false,
              demobilized: false,
              reinserted: false,
              palenRaizal: false,
              roomGintano: false,
              nnaNunaccompaniedAdult: false
            }
            // this.form.get('dni')?.setValue(this.inputDocument.value);

            if (data.lastCase){
              let d = data.lastCase;
              dataVues.olderAdult = d.olderAdult;
              dataVues.disabled = d.disabled;
              dataVues.womenHeadHousehold = d.womenHeadHousehold;
              dataVues.afrodescendent = d.afrodescendent;
              dataVues.lgtbi = d.lgtbi;
              dataVues.victim = d.victim;
              dataVues.disabled = d.disabled;
              dataVues.demobilized = d.demobilized;
              dataVues.reinserted = d.reinserted;
              dataVues.palenRaizal = d.palenRaizal;
              dataVues.roomGintano = d.roomGintano;
              dataVues.nnaNunaccompaniedAdult = d.nnaNunaccompaniedAdult;
            }

            this.form.setValue(dataVues);
          }else{
            this._person.show(this.inputDocument.value);
          }
        }
      });
    }else{
      this._person.show(this.inputDocument.value);
    }
  }

  send(){
    console.log(this.form.value);
    this._cases.insert(this.form.value).subscribe({
      next: data =>{
        this._matDialogRef.close(data);
      }
    });
  }
}
