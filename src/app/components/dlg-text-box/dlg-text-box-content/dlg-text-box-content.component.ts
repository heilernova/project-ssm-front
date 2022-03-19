import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dlg-text-box-content',
  templateUrl: './dlg-text-box-content.component.html',
  styleUrls: ['./dlg-text-box-content.component.scss']
})
export class DlgTextBoxContentComponent implements OnInit {
  title:string = "title"
  text:string = "";
  constructor(
    private _matDialogRef:MatDialogRef<DlgTextBoxContentComponent>,
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
