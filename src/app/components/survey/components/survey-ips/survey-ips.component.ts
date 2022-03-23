import { Component, OnInit } from '@angular/core';
import { EVALUATION_IPS } from './questions/evaluation-ips';
import { LABORATORY } from './questions/laboratory';
import { MEDICINE_DENTISTRY } from './questions/medidicine-dentistry';
import { PHARMACY_QUESTIONS } from './questions/pharmacy';

@Component({
  selector: 'app-survey-ips',
  templateUrl: './survey-ips.component.html',
  styleUrls: ['./survey-ips.component.scss']
})
export class SurveyIpsComponent implements OnInit {

  questionsPharmacy = PHARMACY_QUESTIONS;
  questionsMedicineDentistry = MEDICINE_DENTISTRY;
  questionsEvaluationIPS = EVALUATION_IPS;
  questionsLaboratory = LABORATORY

  constructor() { 
    console.log(this.questionsPharmacy);
  }

  ngOnInit(): void {
  }

}
