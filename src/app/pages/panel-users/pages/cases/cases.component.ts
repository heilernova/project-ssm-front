import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ICaseData } from './interfaces/Icase';
import { CasesService } from './services/cases.service';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements OnInit {

  dataSource = new MatTableDataSource<ICaseData>([]);
  displayedColumns = ['date', 'dni', 'name', 'status', 'controls'];
  @ViewChild(MatTable) table!: MatTable<ICaseData>;

  inputSearch = new FormControl();

  infoCase:ICaseData|undefined = undefined;

  constructor(
    private _cases:CasesService
  ) { 
    this._cases.getCases().subscribe({
      next: (data) =>{
        this.dataSource.data = data;
        console.log(data);
        this.table.renderRows();
      }
    })

    this.inputSearch.valueChanges.subscribe(res=>{
      this.filteApply(res);
    })
  }

  ngOnInit(): void {
  }

  filteApply(text:string){
    this.dataSource.filter = text.trim().toLowerCase();
  }
  newCase(){
    this._cases.new().afterClosed().subscribe(res=>{
      if (res){
        this.dataSource.data.unshift(res);
        this.table.renderRows();
        
      }
    });
  }
  closeInfo(){
    console.log('s')
    this.infoCase = undefined;
  }
  showInfo(elem:ICaseData){
    this.infoCase = elem;
  }
}
