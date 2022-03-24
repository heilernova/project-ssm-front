import { IQuestion, RES_BUENO_MALO_REGUAR, RES_SI_NO } from "../../interfaces/questions";

export const PHARMACY_QUESTIONS:IQuestion[] = [
    {
        question: 'El trato de la persona que le entrego los medicamentos  fue',
        response: RES_BUENO_MALO_REGUAR
    },
    {
        question: 'Califique la comodidad  del área  para recibir los medicamentos',
        response: RES_BUENO_MALO_REGUAR
    },
    {
        question: 'Califique  el tiempo  de espera desde el momento  de entrega de la formula  y la recepción  de los medicamentos.',
        response: [
            {code:1, text: 'Inmediato'},
            {code:2, text: 'A las 24 horas'},
            {code:3, text: 'Más de 48 horas'}
        ]
    },
    {
        question: '¿Entregaron el medicamento según lo formulado?',
        response: RES_SI_NO
    },
    {
        question: '¿Fue entregado la totalidad de los medicamentos?',
        response: [
            {code:1, text: 'Inmediato'},
            {code:2, text: 'A las 24 horas'},
            {code:3, text: 'Más de 24 horas'}
        ]
    },
    {
        question: 'La farmacia ofrece el servicio de entrega de medicamentos a domicilio?',
        response: [
            {code:1, text: 'Si'},
            {code:1, text: 'No'},
            {code:3, text: 'No sabe'},
        ]
    },
    {
        question: 'Califique en general el servicio de Farmacia.',
        response: RES_BUENO_MALO_REGUAR
    },
]