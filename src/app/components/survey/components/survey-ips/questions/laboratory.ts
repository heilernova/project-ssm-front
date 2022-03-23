import { IQuestion, RES_BUENO_MALO_REGUAR, RES_SI_NO } from "../../interfaces/questions";

export const LABORATORY:IQuestion[] = [
    {
      question: '1.	Considera que el horario establecido para la atención es',
      formControlName: '',
      response: RES_BUENO_MALO_REGUAR
    },
    {
      question: '2.	La atención de la persona que lo recibió fue',
      formControlName: '',
      response: RES_BUENO_MALO_REGUAR
    },
    {
      question: '3.	Usted  considera que la información suministrada para la recolección de  la  muestra  y  la preparación del  paciente fue',
      formControlName: '',
      response: RES_BUENO_MALO_REGUAR
    },
    {
      question: '4.	Indique el tiempo en sala espera para la toma del exámen',
      formControlName: '',
      response: [
        {code:1, text:'Inmediato'},
        {code:2, text:'1 Hora'},
        {code:3, text:'2 Hora'},
        {code:4, text:'Mas de 3 Hora'}
      ]
    },
    {
      question: '5.	Las condiciones para realizar el examen en cuanto a la comodidad e higiene son',
      formControlName: '',
      response: RES_BUENO_MALO_REGUAR
    },
    {
      question: '6.	Califique el trato del profesional al tomar las muestras',
      formControlName: '',
      response: RES_BUENO_MALO_REGUAR
    },
    {
      question: '7.	Luego realizar el examen del laboratorio, le entregaron  los resultados',
      formControlName: '',
      response: [
        { code: 1, text: 'El mismo dia'},
        { code: 2, text: 'A los 2 dás'},
        { code: 3, text: 'A los 5 dás'},
        { code: 4, text: 'A los 8 dás'},
      ]
    },
    {
      question: '8.	Está conforme  con el tiempo  de entrega de los resultados ',
      formControlName: '',
      response: RES_SI_NO
    },
    {
      question: '9.	Califique su satisfacción  con la atención  brindada  en el laboratorio clínico',
      formControlName: '',
      response: RES_BUENO_MALO_REGUAR
    },
  ]