import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NvMessageBoxService } from 'ng-nova';
import { IRequest } from '../../interfaces/IResquest';
import { RequestService } from '../../services/request.service';
import { DlgRequestCommentComponent } from '../dlg-request-comment/dlg-request-comment.component';

@Component({
  selector: 'app-request-info',
  templateUrl: './request-info.component.html',
  styleUrls: ['./request-info.component.scss']
})
export class RequestInfoComponent implements OnInit, AfterViewInit  {

  listObsevations:any[] = [];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator; 

  constructor(
    private matDialogRef:MatDialogRef<RequestInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public info:IRequest,
    private matDialog:MatDialog,
    private _message:NvMessageBoxService,
    private _request:RequestService
  ) { }

  ngOnInit(): void {
    this.listObsevations = this.info.observations;
    this.dataSource = new MatTableDataSource<any>(this.info.observations);
  }
  
  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    
  }

  addComment(){
    this.matDialog.open(DlgRequestCommentComponent).afterClosed().subscribe(
      res=>{
        if (res){
          // Registramos el comentarios
          this._request.onRegisterComment(this.info.id, res).subscribe({
            next: data =>{
              this.info.observations.push(data);
              this.dataSource.data = this.info.observations;
              
            },error:()=>{
              this.matDialogRef.close(false);
            }
          });
        }
      }
    );
  }

  closeCase(){
    this._message.alert("", "¿Desea cerrar el caso?", {confirm: true}).afterClosed().subscribe(
      res=>{
        if (res){
          this.matDialogRef.close();
        }
      }
    )
  }

}
