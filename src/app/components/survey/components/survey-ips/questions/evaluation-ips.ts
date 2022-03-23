import { IQuestion, RES_BUENO_MALO_REGUAR, RES_SI_NO } from "../../interfaces/questions";

export const EVALUATION_IPS:IQuestion[] = [
    {
        question: 'Al momento de solicitar algún servicio de la IPS, el trato hacia usted fue',
        response: RES_BUENO_MALO_REGUAR
    },
    {
        question: 'El personal que le informó sobre el trámite que debía seguir fue claro, le supo dar las indicaciones?',
        response: RES_SI_NO
    },
    {
        question: 'Cuando usted solicita una cita médica, le asignan la cita para',
        response: [
            {code: 1, text: '1 día despues'},
            {code: 2, text: '2 a 3 días depues'},
            {code: 3, text: '4 a 5 días depues'},
            {code: 4, text: '8 días depues'},
            {code: 5, text: 'Mas de 10 días depues'},
            {code: 6, text: 'Se murio y no le respondieron'},
        ]
    },
    {
        question: 'En el momento que la IPS le solicita el nombredde la EPS a la cual esta afiliado la reacción fue con',
        response: [
            {code: 1, text: 'Amabilida'},
            {code: 2, text: 'Normalidad'},
            {code: 3, text: 'Indisposición'},
            {code: 4, text: 'Apatía'},
        ]
    },
    {
        question: 'El tiempo de espera entre la hora de la cita asignada  y el momento  real de la atención fue',
        response: [
            {code: 1, text: 'Mediciana general'},
            {code: 2, text: 'Farmacia'},
            {code: 3, text: 'Laboratoría clínico'},
            {code: 4, text: 'Odontología'},
            {code: 5, text: 'PyP'},
        ]
    },
    {
        question: 'Cómo califica la higiene en la IPS ',
        response: RES_BUENO_MALO_REGUAR
    },
    {
        question: '¿Considera que la IPS asignada cumple con sus necesidades?',
        response: RES_SI_NO
    },
    {
        question: 'Califique el servicio de la  IPS  en general',
        response:  RES_BUENO_MALO_REGUAR
    }
]