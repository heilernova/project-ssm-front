import { FormControl, FormGroup, Validators } from "@angular/forms";
import { options_okay_regular_bad, options_score_1_to_5, options_yes_no, QuestinoType } from "../interfaces/Iquestions";
import { ISurveyData } from "../interfaces/Isurvey";



export const SurveyIPSOdontologyData:ISurveyData = {
    name: 'ipsHospitalization',
    nameTitle:'Odontología',
    database: 'tb_surveys_ips',
    icon: 'biotech',
    introduction: '',
    formGroup: new FormGroup({}),
    salve: false,
    questions: [
        /** 01 */
        {
            formControl: new FormControl('', Validators.required),
            question: 'Nombre de la IPS',
            type: QuestinoType.text,
            options: []
        },
        /** 02 */
        {
            formControl: new FormControl('', Validators.required),
            question: 'Cuando usted solicita una cita, se la asignan para',
            type: QuestinoType.radioButton,
            options: [
                {code: 1, text: 'El mismo dia'},
                {code: 2, text: 'Un día despues'},
                {code: 3, text: '5 días despues'},
                {code: 4, text: '8 días despues'},
            ]
        },
        /** 03 */
        {
            formControl: new FormControl('', Validators.required),
            question: 'Al ingresar  a  la  IPS el trato de la persona que lo atendió fue',
            type: QuestinoType.radioButton,
            options: options_okay_regular_bad
        },
        /** 04 */
        {
            formControl: new FormControl('', Validators.required),
            question: '¿El profesional estaba en el consultorio?',
            type: QuestinoType.radioButton,
            options: options_yes_no
        },
        /** 05 */
        {
            formControl: new FormControl('', Validators.required),
            question: '¿El profesional tenia buena disposición para atenderlo?',
            type: QuestinoType.radioButtonMas,
            options: options_yes_no
        },
        /** 06 */
        {
            formControl: new FormControl('', Validators.required),
            question: 'Califique la comunicación que pudo obtener  con el profesional',
            type: QuestinoType.radioButton,
            options: options_okay_regular_bad
        },
        /** 07 */
        {
            formControl: new FormControl('', Validators.required),
            question: 'Califique la explicación  sobre exámenes  y tratamiento a seguir',
            type: QuestinoType.radioButton,
            options: options_okay_regular_bad
        },
        /** 08 */
        {
            formControl: new FormControl('', Validators.required),
            question: 'Califique la privacidad y comodidad del consultorio.',
            type: QuestinoType.radioButton,
            options: options_yes_no
        },
        /** 09 */
        {
            formControl: new FormControl('', Validators.required),
            question: 'Califique su satisfacción con  la atención recibida por el profesional en consultorio',
            type: QuestinoType.radioButton,
            options: options_yes_no
        },
        /** 10 */
        {
            formControl: new FormControl('', Validators.required),
            question: 'Califique su satisfacción en general con la atención recibida en el servicio de odontologpia',
            type: QuestinoType.radioButton,
            options: options_okay_regular_bad
        }
    ]
}