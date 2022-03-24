import { RES_BUENO_MALO_REGUAR, RES_SI_NO } from "../../interfaces/questions";

export const HOSPITALIZATIONS:{question:string, response:{code:string|number, text:string}[]}[] = [
    { 
      question: "¿Su ingreso al Hospital  fue por?",
      response: [
        {code:'0', text:'Servicio de urgencias'},
        {code:'1', text:'Cirugía programada'}
      ]
    },
    {
      question: 'Al ingresar al Hospital  fue atendido',
      response: [
        {code:1, text: 'Inmediatamente'},
        {code:2, text: 'Entre 20 a 40 munutos'},
        {code:3, text: 'Mas de 40 minutos'}
      ]
    },
    {
      question: 'Cuáles de las siguientes personas lo  recibió',
      response: [
        { code:1, text:'Vigilante'},
        { code:2, text:'Auxiliar'},
        { code:3, text:'Recepcionista'},
        { code:4, text:'Médico'},
        { code:5, text:'Enfermero'}
      ]
    },
    {
      question: 'La atención de la persona que lo recibió  fue  Amable y oportuna',
      response:RES_SI_NO
    },
    {
      question: 'Al registrarse le solicitaron la siguiente información',
      response: [
        { code:'Documento de identificación', text: 'Documento de identificación'},
        { code:'Autorización', text: 'Autorización'},
        { code:'Otro', text: 'Otro'}
      ]
    },
    {
      question: 'Califique la comodidad de la habitación',
      response: RES_BUENO_MALO_REGUAR,
    },
    {
      question: 'Califique la  atención recibida por su(s) medico, especialista, tratantes',
      response: RES_BUENO_MALO_REGUAR
    },
    {
      question:'¿Está conforme con la información recibida por el medico sobre la enfermedad o motivo de  consulta?',
      response: RES_SI_NO
    },
    {
      question: '¿Durante la hospitalización ha recibido o recibió oportunamente los medicamentos y los exámenes solicitados por el médico tratante?',
      response: RES_SI_NO
    },
    {
      question: 'Califique  en conjunto la  satisfacción de la atención brindada  durante la  hospitalización.',
      response: RES_BUENO_MALO_REGUAR
    }
    
  ]
  