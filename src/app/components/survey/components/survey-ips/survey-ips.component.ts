import { Component, OnInit } from '@angular/core';
import { EVALUATION_IPS } from './questions/evaluation-ips';
import { HOSPITALIZATIONS } from './questions/hospitalization';
import { LABORATORY } from './questions/laboratory';
import { DENTISTRY } from './questions/dentistry';
import { PHARMACY_QUESTIONS } from './questions/pharmacy';
import { MEDICINE } from './questions/medidicine';
import { ApiSurveysService } from 'src/app/api/surveys/api-surveys.service';

@Component({
  selector: 'app-survey-ips',
  templateUrl: './survey-ips.component.html',
  styleUrls: ['./survey-ips.component.scss']
})
export class SurveyIpsComponent implements OnInit {

  questionsHostitalizatin = HOSPITALIZATIONS
  questionsPharmacy = PHARMACY_QUESTIONS;
  questionsDentistry = DENTISTRY;
  questionsMedicine = MEDICINE
  questionsEvaluationIPS = EVALUATION_IPS;
  questionsLaboratory = LABORATORY;

  tabMenus:{index:number, text:string, icon:string}[] = [
    {index: 0, text:'Evaluación a la IPS', icon: 'business'},
    {index: 1, text:'Hospitalización', icon: 'local_hospital'},
    {index: 2, text:'Laboratorio', icon: 'vaccines'},
    {index: 3, text:'Farmacia', icon: 'local_pharmacy'},
    {index: 4, text:'Medicina', icon: 'medication'},
  ]

  ipsList:{id:number, name:string}[] = [];

  tabValue:number = 0;
  tabTitle:string = this.tabMenus[0].text;
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
