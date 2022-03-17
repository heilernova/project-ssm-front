import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dlg-request-comment',
  templateUrl: './dlg-request-comment.component.html',
  styleUrls: ['./dlg-request-comment.component.scss']
})
export class DlgRequestCommentComponent implements OnInit {

  comment:string = "";
  constructor(
    private matDialogRef:MatDialogRef<DlgRequestCommentComponent>
  ) { }

  ngOnInit(): void {
  }

  send(){
    this.matDialogRef.close(this.comment);
  }
}
