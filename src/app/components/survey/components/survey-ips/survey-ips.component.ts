import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EVALUATION_IPS } from './questions/evaluation-ips';
import { HOSPITALIZATIONS } from './questions/hospitalization';
import { LABORATORY } from './questions/laboratory';
import { DENTISTRY } from './questions/dentistry';
import { PHARMACY_QUESTIONS } from './questions/pharmacy';
import { MEDICINE } from './questions/medidicine';
import { ApiSurveysService } from 'src/app/api/surveys/api-surveys.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-survey-ips',
  templateUrl: './survey-ips.component.html',
  styleUrls: ['./survey-ips.component.scss']
})
export class SurveyIpsComponent implements OnInit {

  @Output() formDataIPS = new EventEmitter<any>();
  @Output() formDataHospitalization = new EventEmitter<any>();
  @Output() formDataLaboratory = new EventEmitter<any>();
  @Output() formDataPharmacy = new EventEmitter<any>();
  @Output() formDataMedicine = new EventEmitter<any>();
  @Output() formDataOdontology = new EventEmitter<any>();
  
  @Input() formIPS = new FormGroup({});
  @Input() formHospitalization = new FormGroup({});
  @Input() formLaboratory = new FormGroup({});
  @Input() formPharmacy = new FormGroup({});
  @Input() formMedicine = new FormGroup({});
  @Input() formOdontology = new FormGroup({});
  
  @Input() formIPSSalve:boolean = false;
  @Input() formHospitalizationSalve:boolean = false;
  @Input() formLaboratorySalve:boolean = false;
  @Input() formPharmacySalve:boolean = false;
  @Input() formMedicineSalve:boolean = false;
  @Input() formOdontologySalve:boolean = false;

  questionsHostitalizatin = HOSPITALIZATIONS
  questionsPharmacy = PHARMACY_QUESTIONS;
  questionsDentistry = DENTISTRY;
  questionsMedicine = MEDICINE
  questionsEvaluationIPS = EVALUATION_IPS;
  questionsLaboratory = LABORATORY;

  tabMenus:{index:number, text:string, icon:string}[] = [
    {index: 0, text:'Evaluación a la IPS primaria', icon: 'business'},
    {index: 1, text:'Hospitalización', icon: 'local_hospital'},
    {index: 2, text:'Laboratorio', icon: 'vaccines'},
    {index: 3, text:'Farmacia', icon: 'local_pharmacy'},
    {index: 4, text:'Medicina', icon: 'medication'},
    {index: 5, text:'Odontologia', icon: 'medication'},
  ]

  ipsList:{id:number, name:string}[] = [];

  tabValue:number = 0;
  tabTitle:string = this.tabMenus[0].text;

  inputIPS = new FormControl('', Validators.required);
  inputLaboratory = new FormControl('', Validators.required);
  inputPharmacy = new FormControl('', Validators.required);
  inputMedicine = new FormControl('', Validators.required);
  inputOdontology = new FormControl('', Validators.required);
  constructor(
    private _apiSurveys:ApiSurveysService
  ) { 
    this._apiSurveys.getIPS().subscribe({next: data => { this.ipsList = data; }})
  }

  ngOnInit(): void {
  }

  selectMenu(menu:{index:number, text:string}){
    this.tabValue = menu.index;
    this.tabTitle = menu.text;
  }

}
