import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-date',
  templateUrl: './box-date.component.html',
  styleUrls: ['./box-date.component.scss']
})
export class BoxDateComponent implements OnInit {

  years:number[] = [];
  months:{num:number, name:string}[];
  constructor() { 
    let year:number = 1940;

    for (let index = 1940; index < 2022; index++) {
      this.years.push(index);
    }

    this.months = [
      {num:1, name: '01 - Enero'},
      {num:2, name: '02 - Febrero'},
      {num:3, name: '03 - Marzo'},
      {num:4, name: '04 - Abril'},
      {num:5, name: '05 - Mayo'},
      {num:6, name: '06 - Junio'},
      {num:7, name: '07 - Julio'},
      {num:8, name: '08 - Agosto'},
      {num:9, name: '09 - Septiembre'},
      {num:10, name: '10 - Obtubre'},
      {num:11, name: '11 - Noviembre'},
      {num:12, name: '12 - Diciembre'}
    ]
  }

  ngOnInit(): void {
  }

}
