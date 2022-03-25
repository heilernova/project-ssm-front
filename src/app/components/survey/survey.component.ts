import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NvMessageBoxService } from 'ng-nova';
import { ApiEpsService } from 'src/app/api/eps/api-eps.service';
import { ApiPersonsService } from 'src/app/api/persons/api-persons.service';
import { IPersonGet } from 'src/app/api/persons/interfaces/IPersonGet';
import { ApiSurveysService } from 'src/app/api/surveys/api-surveys.service';
import { CellphonePipe } from 'src/app/pipes/cellphone.pipe';
import { DlgPersonService } from '../dlg-person/dlg-person.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

  scores:string[] = ['1', '2', '3', '4', '5'];
  dni:string = '';

  client:IPersonGet|undefined = undefined; 

  listSurveyors:{id:number, name:string}[] = [];
  userName:string = "";
  userCellphone:string = "";
  userAddress:string = "";

  inputDNI= new FormControl('', Validators.required);
  inputUser = new FormControl('', Validators.required);

  surveys:IServerValid = {
    eps	: { answered: false, salve: false, form: new FormGroup({dni: this.inputDNI, user:this.inputUser})},
    ips: {
      primary:{ answered: false, salve: false, form: new FormGroup({dni: this.inputDNI, user:this.inputUser})},
      hospitalization:{ answered: false, salve: false, form: new FormGroup({dni: this.inputDNI, user:this.inputUser})},
      laboratory: { answered: false, salve: false, form: new FormGroup({dni: this.inputDNI, user:this.inputUser})},
      pharmacy: { answered: false, salve: false, form: new FormGroup({dni: this.inputDNI, user:this.inputUser})},
      medicine: { answered: false, salve: false, form: new FormGroup({dni: this.inputDNI, user:this.inputUser})},
      odontology: { answered: false, salve: false, form: new FormGroup({dni: this.inputDNI, user:this.inputUser})}
    }
  }


  constructor(
    private _apiEPS:ApiEpsService,
    private _apiPersons:ApiPersonsService,
    private _person:DlgPersonService,
    private _apiSurveys:ApiSurveysService,
    private _message:NvMessageBoxService
   
  ) {
    this._apiSurveys.getSurveyors().subscribe({next: data=>{ this.listSurveyors = data;}})
  }

  ngOnInit(): void {
  }


  validDocument(){
    if (this.dni != ""){

      this._apiPersons.get(this.dni).subscribe({
        next: data => {

          // Si el cliente exite
          this.userName = `${data.name} ${data.lastName}`;
          this.userCellphone = new CellphonePipe().transform(data.cellphone);
          this.userAddress = data.address;

          this.client = data;
          this.inputDNI.setValue(data.dni);
        },error: ()=>{

          // Si no existe lo regitramos.
          this._person.show(this.dni).afterClosed().subscribe(res=>{
            if (res){

              this.client = res;
              this.userName = `${res.name} ${res.lastName}`;
              this.userCellphone = new CellphonePipe().transform(res.cellphone);
              this.userAddress = res.address;
            }
          })
        }
      })
    }
  }

  disableSurveys():boolean{
    return this.client == undefined;
  }

  clearUser(){
    this.client = undefined;
    this.userCellphone = "";
    this.userAddress = "";
    this.userName = "";
    this.inputDNI.setValue('');
  }

  resetForms(){
    let use = this.inputUser.value;

    this.clearUser();
  
    this.surveys.eps.form.reset();
    this.surveys.eps.form.enable()
    this.surveys.eps.salve = false;

    this.surveys.ips.primary.form.reset();
    this.surveys.ips.primary.form.enable();
    this.surveys.ips.primary.salve = false;
    
    this.surveys.ips.hospitalization.salve = false;
    this.surveys.ips.hospitalization.form.reset();
    this.surveys.ips.hospitalization.form.enable();
    
    this.surveys.ips.laboratory.salve = false;
    this.surveys.ips.laboratory.form.reset();
    this.surveys.ips.laboratory.form.enable();

    this.surveys.ips.pharmacy.salve = false;
    this.surveys.ips.pharmacy.form.reset();
    this.surveys.ips.pharmacy.form.enable();

    this.surveys.ips.medicine.salve = false;
    this.surveys.ips.medicine.form.reset();
    this.surveys.ips.medicine.form.enable();

    this.surveys.ips.odontology.salve = false;
    this.surveys.ips.odontology.form.reset();
    this.surveys.ips.odontology.form.enable();
    
    this.inputDNI.reset();
    this.dni = "";
    this.inputUser.setValue(use);
  }

  send(){
    console.log();
  }

  enableInputsPrimarios(){
    this.inputDNI.enable();
        this.inputUser.enable();
  }

  sendEPS(data:any){
    console.log(data);

    this._apiSurveys.salveEPS(data).subscribe({
      next: ()=>{
        this.surveys.eps.salve = true;
        this.surveys.eps.form.disable();
        this.enableInputsPrimarios()
      }
    })


  }

  sendIPS(data:any){
    console.log(data);
    this._apiSurveys.salveIPS(data).subscribe({
      next: ()=>{
        this.surveys.ips.primary.salve = true;
        this.surveys.ips.primary.form.disable();
        this.enableInputsPrimarios();
      }
    })
  }

  sendHospitalization(data:any){
    console.log(data);
    this._apiSurveys.salveIpsHospitalization(data).subscribe({
      next: ()=>{

        this.surveys.ips.hospitalization.salve = true;
        this.surveys.ips.hospitalization.form.disable();
        this.enableInputsPrimarios();
      }
    })
  }

  sendLaboratory(data:any){
    console.log(data);

    this._apiSurveys.salveIpsLaboratory(data).subscribe({
      next: ()=>{
        this.surveys.ips.laboratory.salve = true;
        this.surveys.ips.laboratory.form.disable();
        this.enableInputsPrimarios();
      }
    })
  }

  sendPharmacy(data:any){
    console.log(data);
    this._apiSurveys.salveIpsPharmacy(data).subscribe({
      next: ()=>{
        this.surveys.ips.pharmacy.salve = true;
        this.surveys.ips.pharmacy.form.disable();
        this.enableInputsPrimarios();
      }
    })
  }

  sendMedicine(data:any){
    console.log(data);
    this._apiSurveys.salveIpsMedicine(data).subscribe({
      next: ()=>{
        this.surveys.ips.medicine.salve = true;
        this.surveys.ips.medicine.form.disable();
        this.enableInputsPrimarios();
      }
    })
  }

  sendOdontology(data:any){
    console.log(data);
    this._apiSurveys.salveIpsOdontology(data).subscribe({
      next: ()=>{
        this.surveys.ips.odontology.salve = true;
        this.surveys.ips.odontology.form.disable();
        this.enableInputsPrimarios();
      }
    })
  }
}


interface IServerValid{
  eps:{answered: boolean;salve: boolean, form:FormGroup},
  ips:{
    primary:{answered: boolean;salve: boolean, form:FormGroup},
    hospitalization:{answered: boolean;salve: boolean, form:FormGroup},
    laboratory: {answered: boolean;salve: boolean, form:FormGroup},
    pharmacy: {answered: boolean;salve: boolean, form:FormGroup},
    medicine: {answered: boolean;salve: boolean, form:FormGroup},
    odontology: {answered: boolean;salve: boolean, form:FormGroup}

  }
}