import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { MatTableDataSource } from '@angular/material/table';
import { ICase } from '../interfaces/ICase';
import { DlgCaseService } from './dlg-case.service';

@Component({
  selector: 'app-dlg-case',
  templateUrl: './dlg-case.component.html',
  styleUrls: ['./dlg-case.component.scss']
})
export class DlgCaseComponent implements OnInit, AfterViewInit {

  dataObservations = new MatTableDataSource<{id:number, content:string}>([]);
  @ViewChild(MatMenu) menu!: MatMenu;
  @ViewChild(MatMenuTrigger) triggerBtn!: MatMenuTrigger;
  constructor(
    private _dlgCase:DlgCaseService,
    private matDialgoRef:MatDialogRef<DlgCaseComponent>,
    @Inject(MAT_DIALOG_DATA) public caseData:ICase
  ) { 
    this.dataObservations.data =  this.caseData.observations;
  }
  ngAfterViewInit(): void {
    
  }

  ngOnInit(): void {
  }

  showMenu(){
    console.log('Hola');
    // this.tri.openMenu();
    this.triggerBtn.updatePosition();
    this.triggerBtn.openMenu();
    return false;
  }

  addObservation(){
    this._dlgCase.addComment( this.caseData.id).afterClosed().subscribe(
      res =>{
        if (res){
          this.caseData.observations.push(res);
          this.dataObservations.data = this.caseData.observations;
        }
      }
    );
  }
}
