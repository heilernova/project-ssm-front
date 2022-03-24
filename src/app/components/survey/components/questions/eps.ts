import { IQuestion, RES_SCORE, RES_SI_NO } from "../interfaces/questions";

export const QUES_EPS:IQuestion[] = [
    {
        question: '¿Cuáles de las siguientes personas lo recibió?',
        response: [
            {code: 'VIGILANTE', text:'Vigilante'},
            {code: 'PROMOTOR', text:'Promotor'},
            {code: 'RECEPCIONISTA', text:'Recepcionista'}
        ],
        responseOptionOther:true
    },
    {
        question: 'La atención de la persona que lo recibió fue amable y oportuna?',
        response: RES_SI_NO
    },
    {
        note: 'Califique la gestión de la entidad (EAPB) en escala de uno a cinco donde: 1 es muy malo, y 5 es excelente.',
        question: 'Adecuación de la sede de la EAPB',
        response: RES_SCORE
    },
    {
        question: 'Procesos de difusión, canales de atención y capacitación de usuarios y alianzas.',
        response: RES_SCORE
    },
    {
        question: 'Procesos de afiliación, reportes de nacimientos, novedades, portabilidad, movilidad y traslado',
        response: RES_SCORE
    },
    {
        question: 'Procesos de direccionamiento y demanda inducida   (P y P)',
        response: RES_SCORE
    },
    {
        question: 'Procesos de atención para la prestación de servicios en la red',
        response: RES_SCORE
    },
    {
        question: 'Procesos de autorizaciones',
        response: RES_SCORE
    },
    {
        question: 'Proceso de referencia a otro departamento',
        response: RES_SCORE
    },
    {
        question: 'Proceso de quejas, reclamos y solución de inconveniente',
        response: RES_SCORE
    },
    {
        question: 'Como califica la gestión del promotor y el asesor de servicios',
        response: RES_SCORE,
        subquestions: [
            { 
                question: 'Relaciones interpersonales',
                response: RES_SCORE
            },
            {
                question: 'Gestión frente a la comunidad',
                response: RES_SCORE
            }
        ]
    },
    {
        question: 'La gestión que realiza la EAPB en beneficio a los usuarios es',
        response: RES_SCORE
    }

]


// const questions:{question:string, subquestions?:string[]}[] = [
//     { question:'Adecuación de la sede de la EAPB'},
//     { question:'Procesos de difusión, canales de atención y capacitación de usuarios y alianzas.'},
//     { question:'Procesos de afiliación, reportes de nacimientos, novedades, portabilidad, movilidad y traslado'},
//     { question:'Proceso de direccionamiento y demanda inducida   (P y P)'},
//     { question:'Proceso de atención para la prestación de servicios en la red'},
//     { question:'Procesos de autorizaciones'},
//     { question:'Proceso de referencia a otro departamento'},
//     { question:'Proceso de quejas, reclamos y solución de inconveniente'},
//     { question:'Como califica la gestión del promotor y el asesor de servicios',
//       subquestions: [
//         'Relaciones interpersonales',
//         'Gestión frente a la comunidad'
//       ]
//     },
//     { question:'La gestión que realiza la EAPB en beneficio a los usuarios es'}
//   ];