import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dlg-eps-info',
  templateUrl: './dlg-eps-info.component.html',
  styleUrls: ['./dlg-eps-info.component.scss']
})
export class DlgEpsInfoComponent implements OnInit {

  title:string = "Registrar EPS";
  form:FormGroup;
  constructor(
    private _matDialogRef:MatDialogRef<DlgEpsInfoComponent>,
    @Inject(MAT_DIALOG_DATA) private data?:any
  ) { 
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      disable: new FormControl(false, Validators.required)
    })

    
    if (data){

      this.title = "Editar datos"
      this.form.get('name')?.setValue(data.name);
      this.form.get('disable')?.setValue(data.disable);
    }

  }

  ngOnInit(): void {
  }

  sendForm(){
    console.log(this.form.value);
  }

}
