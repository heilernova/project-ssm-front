import { FormControl, FormGroup, Validators } from "@angular/forms";
import { options_okay_regular_bad, options_score_1_to_5, options_yes_no, QuestinoType } from "../interfaces/Iquestions";
import { ISurveyData } from "../interfaces/Isurvey";



export const SurveyIPSHospitalizationData:ISurveyData = {
    name: 'ipsHospitalization',
    nameTitle:'Hospitalización',
    database: 'tb_surveys_ips',
    icon: 'local_hospital',
    introduction: '',
    formGroup: new FormGroup({}),
    salve: false,
    questions: [
        /** 01 */
        {
            formControl: new FormControl('', Validators.required),
            question: '¿Su ingreso al Hospital  fue por?',
            type: QuestinoType.radioButton,
            options: [
                {code: 1, text:'Servicio de urgencias'},
                {code: 2, text:'Cirugía programada'}
            ]
        },
        /** 02 */
        {
            formControl: new FormControl('', Validators.required),
            question: ' ingresar al Hospital  fue atendido',
            type: QuestinoType.radioButton,
            options: [
                {code:1, text: 'Inmediatamente'},
                {code:2, text: 'Entre 20 a 40 munutos'},
                {code:3, text: 'Mas de 40 minutos'}
            ]
        },
        /** 03 */
        {
            formControl: new FormControl('', Validators.required),
            question: 'Cuáles de las siguientes personas lo  recibió',
            type: QuestinoType.radioButton,
            options: [
                { code:1, text:'Vigilante'},
                { code:2, text:'Auxiliar'},
                { code:3, text:'Recepcionista'},
                { code:4, text:'Médico'},
                { code:5, text:'Enfermero'}
            ]
        },
        /** 04 */
        {
            formControl: new FormControl('', Validators.required),
            question: 'La atención de la persona que lo recibió  fue  Amable y oportuna',
            type: QuestinoType.radioButton,
            options: options_yes_no
        },
        /** 05 */
        {
            formControl: new FormControl('', Validators.required),
            question: 'Al registrarse le solicitaron la siguiente información',
            type: QuestinoType.radioButtonMas,
            options: [
                { code:'Documento de identificación', text: 'Documento de identificación'},
                { code:'Autorización', text: 'Autorización'}
              ],
        },
        /** 06 */
        {
            formControl: new FormControl('', Validators.required),
            question: 'Califique la comodidad de la habitación',
            type: QuestinoType.radioButton,
            options: options_okay_regular_bad
        },
        /** 07 */
        {
            formControl: new FormControl('', Validators.required),
            question: 'Califique la  atención recibida por su(s) médico, especialista, tratantes',
            type: QuestinoType.radioButton,
            options: options_okay_regular_bad
        },
        /** 08 */
        {
            formControl: new FormControl('', Validators.required),
            question: '¿Está conforme con la información recibida por el médico sobre la enfermedad o motivo de  consulta?',
            type: QuestinoType.radioButton,
            options: options_yes_no
        },
        /** 09 */
        {
            formControl: new FormControl('', Validators.required),
            question: '¿Durante la hospitalización ha recibido o recibió oportunamente los medicamentos y los exámenes solicitados por el médico tratante?',
            type: QuestinoType.radioButton,
            options: options_yes_no
        },
        /** 10 */
        {
            formControl: new FormControl('', Validators.required),
            question: 'Califique  en conjunto la  satisfacción de la atención brindada  durante la  hospitalización.',
            type: QuestinoType.radioButton,
            options: options_okay_regular_bad
        }
    ]
}