import { FormControl, FormGroup, Validators } from "@angular/forms";
import { options_okay_regular_bad, options_score_1_to_5, options_yes_no, QuestinoType } from "../interfaces/Iquestions";
import { ISurveyData } from "../interfaces/Isurvey";



export const SurveyIPSData:ISurveyData = {
    name: 'ips',
    nameTitle:'Evaluación a la IPS primaria',
    database: 'tb_surveys_ips',
    icon: 'business',
    introduction: '',
    formGroup: new FormGroup({}),
    salve: false,
    questions: [
        /** 01 */
        {
            formControlName:'ips',
            formControl: new FormControl('', Validators.required),
            question: 'Nombre de la IPS',
            type: QuestinoType.text,
            inputFormat:{textTransform:"uppercase"},
            options: []
        },
        /** 02 */
        {
            formControl: new FormControl('', Validators.required),
            question: 'Al momento de solicitar algún servicio de la IPS, el trato hacia usted fue',
            type: QuestinoType.radioButton,
            options: options_okay_regular_bad
        },
        /** 03 */
        {
            formControl: new FormControl('', Validators.required),
            question: 'El personal que le informó sobre el trámite que debía seguir fue claro, le supo dar las indicaciones?',
            type: QuestinoType.radioButton,
            options: options_yes_no
        },
        /** 04 */
        {
            formControl: new FormControl('', Validators.required),
            question: 'Cuando usted solicita una cita médica, le asignan la cita para',
            type: QuestinoType.radioButton,
            options: [
                {code: 1, text: '1 día despues'},
                {code: 2, text: '2 a 3 días despues'},
                {code: 3, text: '4 a 5 días despues'},
                {code: 4, text: '8 días despues'},
                {code: 5, text: 'Mas de 10 días despues'},
                {code: 6, text: 'Se murio y no le respondieron'},
            ]
        },
        /** 05 */
        {
            formControl: new FormControl('', Validators.required),
            question: 'En el momento que la IPS le solicita el nombre de la EPS a la cual esta afiliado la reacción fue con',
            type: QuestinoType.radioButton,
            options: [
                {code: 1, text: 'Amabilidad'},
                {code: 2, text: 'Normalidad'},
                {code: 3, text: 'Indisposición'},
                {code: 4, text: 'Apatía'},
            ]
        },
        /** 06 */
        {
            formControl: new FormControl('', Validators.required),
            question: 'El tiempo de espera entre la hora de la cita asignada  y el momento  real de la atención fue',
            type: QuestinoType.radioButton,
            options: [
                {code: 1, text: 'Inmediata'},
                {code: 2, text: '10 minutos'},
                {code: 3, text: '15 minutos'},
                {code: 4, text: '20 minutos'},
                {code: 5, text: 'Más de 30 minutos'},
            ]
        },
        /** 07 */
        {
            formControl: new FormControl('', Validators.required),
            question: 'Indique en cuales de los siguientes servicios fue atendido',
            type: QuestinoType.radioButton,
            options: [
                {code: 1, text: 'Mediciana general'},
                {code: 2, text: 'Farmacia'},
                {code: 3, text: 'Laboratoría clínico'},
                {code: 4, text: 'Odontología'},
                {code: 5, text: 'PyP'},
            ]
        },
        /** 08 */
        {
            formControl: new FormControl('', Validators.required),
            question: 'Cómo califica la higiene en la IPS',
            type: QuestinoType.radioButton,
            options: options_okay_regular_bad
        },
        /** 09 */
        {
            formControl: new FormControl('', Validators.required),
            question: '¿Considera que la IPS asignada cumple con sus necesidades?',
            type: QuestinoType.radioButton,
            options: options_yes_no
        },
        /** 10 */
        {
            formControl: new FormControl('', Validators.required),
            question: 'Califique el servicio de la  IPS  en general',
            type: QuestinoType.radioButton,
            options: options_okay_regular_bad
        }
    ]
}