import { FormControl, FormGroup, Validators } from "@angular/forms";
import { options_okay_regular_bad, options_score_1_to_5, options_yes_no, QuestinoType } from "../../../app/pages/surveys/interfaces/Iquestions";
import { ISurveyData } from "src/app/pages/surveys/interfaces/Isurvey";



export const SurveyIPSLaboratoryData:ISurveyData = {
    name: 'ipsHospitalization',
    nameTitle:'Laboratorio',
    database: 'tb_surveys_ips_laboratorys',
    icon: 'vaccines',
    introduction: '',
    formGroup: new FormGroup({}),
    salve: false,
    questions: [
        /** 01 */
        {
            formControl: new FormControl('', Validators.required),
            question: 'Nombre de la IPS',
            type: QuestinoType.text,
            inputFormat:{textTransform:"uppercase"},
            options: []
        },
        /** 02 */
        {
            formControl: new FormControl('', Validators.required),
            question: 'Considera que el horario establecido para la atención es',
            type: QuestinoType.radioButton,
            options: options_okay_regular_bad
        },
        /** 03 */
        {
            formControl: new FormControl('', Validators.required),
            question: 'La atención de la persona que lo recibió fue',
            type: QuestinoType.radioButton,
            options: options_okay_regular_bad
        },
        /** 04 */
        {
            formControl: new FormControl('', Validators.required),
            question: 'Usted  considera que la información suministrada para la recolección de  la  muestra  y  la preparación del  paciente fue',
            type: QuestinoType.radioButton,
            options: options_okay_regular_bad
        },
        /** 05 */
        {
            formControl: new FormControl('', Validators.required),
            question: 'Indique el tiempo en sala espera para la toma del exámen',
            type: QuestinoType.radioButtonMas,
            options: [
                {code:1, text:'Inmediato'},
                {code:2, text:'1 Hora'},
                {code:3, text:'2 Horas'},
                {code:4, text:'Mas de 3 Horas'}
            ]  
        },
        /** 06 */
        {
            formControl: new FormControl('', Validators.required),
            question: 'Las condiciones para realizar el examen en cuanto a la comodidad e higiene son',
            type: QuestinoType.radioButton,
            options: options_okay_regular_bad
        },
        /** 07 */
        {
            formControl: new FormControl('', Validators.required),
            question: 'Califique el trato del profesional al tomar las muestras',
            type: QuestinoType.radioButton,
            options: options_okay_regular_bad
        },
        /** 08 */
        {
            formControl: new FormControl('', Validators.required),
            question: 'Luego realizar el examen del laboratorio, le entregaron  los resultados',
            type: QuestinoType.radioButton,
            options: [
                { code: 1, text: 'El mismo dia'},
                { code: 2, text: 'A los 2 días'},
                { code: 3, text: 'A los 5 días'},
                { code: 4, text: 'A los 8 días'},
              ]
        },
        /** 09 */
        {
            formControl: new FormControl('', Validators.required),
            question: 'Está conforme  con el tiempo  de entrega de los resultados',
            type: QuestinoType.radioButton,
            options: options_yes_no
        },
        /** 10 */
        {
            formControl: new FormControl('', Validators.required),
            question: 'Califique su satisfacción  con la atención  brindada  en el laboratorio clínico',
            type: QuestinoType.radioButton,
            options: options_okay_regular_bad
        }
    ]
}