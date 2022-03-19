import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dlg-person-content',
  templateUrl: './dlg-person-content.component.html',
  styleUrls: ['./dlg-person-content.component.scss']
})
export class DlgPersonContentComponent implements OnInit {
  listEPS:any[] = [];
  formUser:FormGroup;
  constructor() { 
    this.formUser = new FormGroup({
      dni: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      dniType: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      sex: new FormControl('', Validators.required),
      cellphone: new FormControl('', Validators.required),
      email: new FormControl(null),
      address: new FormControl('', Validators.required),
      eps: new FormControl('', Validators.required),
      regime: new FormControl('', Validators.required),
      sisben: new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void {
  }

}
