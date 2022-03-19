import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NvMessageBoxService } from 'ng-nova';
import { EpsService } from '../services/eps.service';

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
    private _eps:EpsService,
    private _message:NvMessageBoxService,
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
    if (this.data){
      // Actulizamos la informacion}
      let inf = this.form.value;
      console.log(inf);
      this._eps.onUpdateEPS(this.data.id, inf).subscribe({
        next: result =>{
          this.data.name = inf.name;
          this.data.disable = inf.disable;
          this._matDialogRef.close(true);
        }
      })
    }else{
      // Registramos la información
      this._eps.onRegisterEPS(JSON.stringify(this.form.value.name)).subscribe({
        next: data =>{
          console.log(data);
          this._matDialogRef.close(data);
        }
      });
    }
  }

}
