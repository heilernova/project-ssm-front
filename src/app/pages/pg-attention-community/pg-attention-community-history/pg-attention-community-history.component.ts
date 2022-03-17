import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { IRequest } from '../interfaces/IResquest';
import { MatDialog } from '@angular/material/dialog';
import { RequestInfoComponent } from './request-info/request-info.component';

@Component({
  selector: 'app-pg-attention-community-history',
  templateUrl: './pg-attention-community-history.component.html',
  styleUrls: ['./pg-attention-community-history.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class PgAttentionCommunityHistoryComponent implements OnInit {
  listRequests:IRequest[] = [];

  displayedColumns = ['date', 'name', 'status', 'controls'];
  expandedElement: IRequest | null = null;
  constructor(
    private _request:RequestService,
    private _matDialog:MatDialog
  ) { }

  ngOnInit(): void {
    this.updateList();
  }

  updateList(){
    this._request.onGetHistory().subscribe({
      next: data=>{
        this.listRequests = data;
        console.log(data);
      }
    })
  }

  showInfo(data:IRequest){
    this._matDialog.open(RequestInfoComponent, {data:data, disableClose:true}).afterClosed().subscribe();
  }

  edit(){

  }

  delete(){

  }

}
