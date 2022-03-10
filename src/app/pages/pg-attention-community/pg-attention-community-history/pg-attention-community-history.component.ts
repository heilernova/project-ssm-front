import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-pg-attention-community-history',
  templateUrl: './pg-attention-community-history.component.html',
  styleUrls: ['./pg-attention-community-history.component.scss']
})
export class PgAttentionCommunityHistoryComponent implements OnInit {
  listRequests:any[] = [];
  constructor(
    private _request:RequestService
  ) { }

  ngOnInit(): void {
    this._request.onGetHistory().subscribe({
      next: data=>{
        this.listRequests = data;
      }
    })
  }

}
