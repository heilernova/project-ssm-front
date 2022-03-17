import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

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
  listRequests:any[] = [];

  displayedColumns = ['date', 'name', 'status', 'controls'];
  expandedElement: any | null;
  constructor(
    private _request:RequestService
  ) { }

  ngOnInit(): void {
    this.updateList();
  }

  updateList(){
    this._request.onGetHistory().subscribe({
      next: data=>{
        this.listRequests = data;
      }
    })
  }

}
