import { Component, Input, OnInit } from '@angular/core';
import { IQuestion } from '../../../interfaces/questions';

@Component({
  selector: 'app-surveys-ips-form',
  templateUrl: './surveys-ips-form.component.html',
  styleUrls: ['./surveys-ips-form.component.scss']
})
export class SurveysIpsFormComponent implements OnInit {

  @Input() questions:IQuestion[] = [];
  @Input() title:string = '[]';
  constructor() { 
    console.log(this.questions);
  }

  ngOnInit(): void {
  }

}
