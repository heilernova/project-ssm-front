import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiEpsService } from 'src/app/api/eps/api-eps.service';
import { IQuestion } from '../interfaces/questions';
import { QUES_EPS } from '../questions/eps';

@Component({
  selector: 'app-survey-eps',
  templateUrl: './survey-eps.component.html',
  styleUrls: ['./survey-eps.component.scss']
})
export class SurveyEpsComponent implements OnInit {
  eps = new FormControl('', Validators.required);
  @Input() salve:boolean = false;
  @Input() form:FormGroup =  new FormGroup({});

  @Output() formData =  new EventEmitter<any>();

  epsList:{id:number, name:string}[] = [];
  scores:number[] = [1,2,3,4,5];

  questions:IQuestion[] = QUES_EPS;


  constructor(
    private _apiSurveys:ApiEpsService
  ) { 
    // Cargamos las eps
    this._apiSurveys.getAll().subscribe({next: data => { this.epsList = data}});
    
  }

  ngOnInit(): void {
  }

  send(formData:any){
  
    this.formData.emit(formData);
  }

}
