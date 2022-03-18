import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DlgCaseService } from '../dlg-case/dlg-case.service';
import { ICase } from '../interfaces/ICase';
import { CasesService } from '../services/cases.service';

@Component({
  selector: 'app-ctn-case-actives',
  templateUrl: './ctn-case-actives.component.html',
  styleUrls: ['./ctn-case-actives.component.scss']
})
export class CtnCaseActivesComponent implements OnInit, AfterViewInit {

  dataSource =  new MatTableDataSource<ICase>([]);
  displayColums:string[] = ['date', 'dni', 'name', 'actions'];
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private _cases:CasesService,
    private _dlgCase:DlgCaseService
  ) { }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.updateList();
  }


  updateList(){
    this._cases.onGetCases().subscribe({
      next: data => {
        this.dataSource.data = data;
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  showCase(data:ICase){
    this._dlgCase.show(data);
  }
}
