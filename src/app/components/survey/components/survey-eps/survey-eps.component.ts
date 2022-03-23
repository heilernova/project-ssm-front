import { Component, OnInit } from '@angular/core';
import { ApiEpsService } from 'src/app/api/eps/api-eps.service';

@Component({
  selector: 'app-survey-eps',
  templateUrl: './survey-eps.component.html',
  styleUrls: ['./survey-eps.component.scss']
})
export class SurveyEpsComponent implements OnInit {

  epsList:{id:number, name:string}[] = [];
  questions1:{question:string, subquestions?:string[]}[] = questions;
  scores:number[] = [1,2,3,4,5];
  constructor(
    private _apiEPS:ApiEpsService
  ) { 
    // Cargamos las eps
    this._apiEPS.getAll().subscribe({next: data=>{ this.epsList = data; }});
  }

  ngOnInit(): void {
  }

}



const questions:{question:string, subquestions?:string[]}[] = [
  { question:'Adecuación de la sede de la EAPB'},
  { question:'Procesos de difusión, canales de atención y capacitación de usuarios y alianzas.'},
  { question:'Procesos de afiliación, reportes de nacimientos, novedades, portabilidad, movilidad y traslado'},
  { question:'Proceso de direccionamiento y demanda inducida   (P y P)'},
  { question:'Proceso de atención para la prestación de servicios en la red'},
  { question:'Procesos de autorizaciones'},
  { question:'Proceso de referencia a otro departamento'},
  { question:'Proceso de quejas, reclamos y solución de inconveniente'},
  { question:'Como califica la gestión del promotor y el asesor de servicios',
    subquestions: [
      'Relaciones interpersonales',
      'Gestión frente a la comunidad'
    ]
  },
  { question:'La gestión que realiza la EAPB en beneficio a los usuarios es'}
]
