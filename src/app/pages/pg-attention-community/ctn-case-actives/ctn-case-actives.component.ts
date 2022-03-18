import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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
    private _cases:CasesService
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

    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
  }
}
