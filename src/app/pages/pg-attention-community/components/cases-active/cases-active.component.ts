import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ApiCasesService } from 'src/app/api/cases/api-cases.service';
import { ICaseGet } from 'src/app/api/cases/Interfaces/ICase';
import { CasesService } from '../../services/cases.service';

@Component({
  selector: 'app-cases-active',
  templateUrl: './cases-active.component.html',
  styleUrls: ['./cases-active.component.scss']
})
export class CasesActiveComponent implements OnInit, AfterViewInit {

  displayedColumns = ['date', 'dni', 'name', 'status', 'controls'];
  dataSource = new MatTableDataSource<ICaseGet>([]);

  @ViewChild(MatTable) table!: MatTable<ICaseGet>;
  constructor(
    private _cases:CasesService,
    private _apiCase:ApiCasesService
  ) { 
    
  }
  ngAfterViewInit(): void {
    this.updateList();
  }

  ngOnInit(): void {
  }

  updateList(){
    this._apiCase.getAll().subscribe({
      next: data =>{

        this.dataSource.data = data;
      }
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  newCase(){
    this._cases.newCase().afterClosed().subscribe(
      res =>{
        if (res){
          this.dataSource.data.push(res);
          this.table.renderRows();
        }
      }
    );
  }

  showInfo(item:any){
    this._cases.showCase(item);
  }
  caseDelete(item:any){
    this.dataSource.data.pop();
    this.table.renderRows();
  }
}
