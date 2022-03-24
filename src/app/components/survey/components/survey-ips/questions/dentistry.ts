import { IQuestion, RES_BUENO_MALO_REGUAR, RES_SI_NO } from "../../interfaces/questions";

export const DENTISTRY:IQuestion[] = [
    {
        question: 'Cuando usted solicita una cita, le asignan la cita para',
        response: [
            {code: 1, text: 'El mismo dia'},
            {code: 2, text: 'Un día despues'},
            {code: 3, text: '5 días despues'},
            {code: 4, text: '8 días despues'},
        ]
    },
    {
        question: 'Al ingresar  a  la  IPS el trato de la persona que lo atendió fue',
        response: RES_BUENO_MALO_REGUAR
    },
    {
        question: '¿El profesional estaba en el consultorio?  ',
        response: RES_SI_NO
    },
    {
        question: '¿El profesional tenia buena disposición para atenderlo?',
        response: RES_SI_NO
    },
    {
        question: 'Califique la comunicación que pudo obtener  con el profesional',
        response: RES_BUENO_MALO_REGUAR
    },
    {
        question: 'Califique la explicación  sobre exámenes  y tratamiento a seguir',
        response: RES_BUENO_MALO_REGUAR
    },
    {
        question: 'Califique la privacidad y comodidad del consultorio.',
        response: RES_BUENO_MALO_REGUAR
    },
    {
        question: 'Califique su satisfacción con  la atención recibida por el profesional en consultorio',
        response: RES_BUENO_MALO_REGUAR
    },
    {
        question: 'Califique su satisfacción en general con la atención recibida en el servicio de medicina general y odontología',
        response: RES_BUENO_MALO_REGUAR
    },
]