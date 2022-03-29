import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-info-item',
  templateUrl: './case-info-item.component.html',
  styleUrls: ['./case-info-item.component.scss']
})
export class CaseInfoItemComponent implements OnInit {
  @Input() lable:string = '';
  @Input() class:string = '';
  @Input() width:string|undefined = undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
