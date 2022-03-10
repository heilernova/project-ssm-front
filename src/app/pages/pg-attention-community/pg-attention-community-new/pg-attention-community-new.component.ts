import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-pg-attention-community-new',
  templateUrl: './pg-attention-community-new.component.html',
  styleUrls: ['./pg-attention-community-new.component.scss']
})
export class PgAttentionCommunityNewComponent implements OnInit {

  formUser:FormGroup;
  formRequest:FormGroup;

  listServices:any[] = [];
  listEPS:any[] = [];
  
  constructor(
    private _resquest:RequestService
  ) { 
    this.formUser = new FormGroup({
      dni: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      typeDNI: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      sex: new FormControl('', Validators.required),
      cellphone: new FormControl('', Validators.required),
      email: new FormControl(''),
      eps: new FormControl('', Validators.required),
      regime: new FormControl('', Validators.required)
    });
    
    this.formRequest = new FormGroup({
      service: new FormControl('', Validators.required),
      accompaniment: new FormControl('', Validators.required),
      sisben: new FormControl(false),
      olderAdult: new FormControl(false),
      disabled: new FormControl(false),
      pregnant: new FormControl(false),
      womenHeadHousehold: new FormControl(false),
      afrodescendent: new FormControl(false),
      lgtbi: new FormControl(false),
      victim: new FormControl(false),
      displaced: new FormControl(false),
      demobilized: new FormControl(false),
      reinserted: new FormControl(false),
      palenRaizan: new FormControl(false),
      roomGintano: new FormControl(false),
      nnaNunaccompaniedAdult: new FormControl(false)
    });

    this.formUser.disable();
    // this.formRequest.disable();
    this.formUser.get('dni')?.enable();

    this._resquest.onGetServices().subscribe({
      next:data=>{
        this.listServices = data;
      }
    })

    this._resquest.onGetEPS().subscribe({
      next: data=>{
        this.listEPS = data;
      }
    });
  }

  ngOnInit(): void {
  }

  validDNI(){
    let dni:string = this.formUser.get('dni')?.value;
    
    if (dni.length > 0){
      
      this._resquest.onValidDNI(dni).subscribe({
        next: data => {
          console.log(data);
          this.formUser.get('name')?.setValue(data.person.name);
          this.formUser.get('lastName')?.setValue(data.person.lastName);
          this.formUser.get('sex')?.setValue(data.person.sex.toString());
          this.formUser.get('email')?.setValue(data.person.email);
          this.formUser.get('cellphone')?.setValue(data.person.cellphone);
          this.formUser.get('regime')?.setValue(data.person.regime.toString());
          this.formUser.get('eps')?.setValue(data.person.eps);
          this.formUser.enable();

          this.formRequest.get('sisben')?.setValue(data.person.sisben);
          if (data.request){
            this.formRequest.get('olderAdult')?.setValue(data.request.olderAdult);
            this.formRequest.get('disabled')?.setValue(data.request.disabled);
            this.formRequest.get('pregnant')?.setValue(data.request.pregnant);
            this.formRequest.get('womenHeadHousehold')?.setValue(data.request.womenHeadHousehold);
            this.formRequest.get('afrodescendent')?.setValue(data.request.afrodescendent);
            this.formRequest.get('lgtbi')?.setValue(data.request.lgtbi);
            this.formRequest.get('victim')?.setValue(data.request.victim);
            this.formRequest.get('displaced')?.setValue(data.request.displaced);
            this.formRequest.get('demobilized')?.setValue(data.request.demobilized);
            this.formRequest.get('reinserted')?.setValue(data.request.reinserted);
            this.formRequest.get('palenRaizan')?.setValue(data.request.palenRaizan);
            this.formRequest.get('roomGintano')?.setValue(data.request.roomGintano);
            this.formRequest.get('nnaNunaccompaniedAdult')?.setValue(data.request.nnaNunaccompaniedAdult);
          }
        },error:e=>{
          this.formUser.reset();
          this.formRequest.reset();

          this.formUser.get('dni')?.setValue(dni);
        }
      });
    }
  }

  sendForm(){
    console.log(this.formRequest.value);
    console.log(this.formUser.value);

    this._resquest.onRegister({persin: this.formUser.value, request: this.formRequest.value}).subscribe({
      next: data => {
        alert("Registro exitoso");
      },error: ()=>{
        alert('No se pudo realizar el registro');
      }
    })
  }

}
