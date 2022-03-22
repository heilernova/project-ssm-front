import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  title:string = "title"
  text:string = "";
  constructor(
    private _matDialogRef:MatDialogRef<ContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data:{title:string, text:string}
  ) { 
    this.title = data.title;
    this.text = data.text;
  }

  ngOnInit(): void {
  }

  send(){
    if (this.data.text != this.text){
      this._matDialogRef.close(this.text.trim());
    }else{
      this._matDialogRef.close(false);
    }
  }

}
