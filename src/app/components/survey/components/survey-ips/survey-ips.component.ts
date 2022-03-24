import { Component, OnInit } from '@angular/core';
import { EVALUATION_IPS } from './questions/evaluation-ips';
import { HOSPITALIZATIONS } from './questions/hospitalization';
import { LABORATORY } from './questions/laboratory';
import { DENTISTRY } from './questions/dentistry';
import { PHARMACY_QUESTIONS } from './questions/pharmacy';
import { MEDICINE } from './questions/medidicine';

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
  questionsLaboratory = LABORATORY

  constructor() { 
    console.log(this.questionsPharmacy);
  }

  ngOnInit(): void {
  }

}
