import { FormControl, FormGroup, Validators } from "@angular/forms";
import { options_okay_regular_bad, options_score_1_to_5, options_yes_no, QuestinoType } from "../../../app/pages/surveys/interfaces/Iquestions";
import { ISurveyData } from "src/app/pages/surveys/interfaces/Isurvey";



export const SurveyIPSPharmacyData:ISurveyData = {
    name: 'ipsHospitalization',
    nameTitle:'Farmacia',
    database: 'tb_surveys_ips_pharmacy',
    icon: 'local_pharmacy',
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
            question: 'El trato de la persona que le entrego los medicamentos  fue',
            type: QuestinoType.radioButton,
            options: options_okay_regular_bad
        },
        /** 03 */
        {
            formControl: new FormControl('', Validators.required),
            question: 'Califique la comodidad  del área  para recibir los medicamentos',
            type: QuestinoType.radioButton,
            options: options_okay_regular_bad
        },
        /** 04 */
        {
            formControl: new FormControl('', Validators.required),
            question: 'Califique  el tiempo  de espera desde el momento  de entrega de la formula  y la recepción  de los medicamentos.',
            type: QuestinoType.radioButton,
            options: [
                {code:1, text: 'Inmediato'},
                {code:2, text: 'A las 24 horas'},
                {code:3, text: 'Más de 48 horas'}
            ]
        },
        /** 05 */
        {
            formControl: new FormControl('', Validators.required),
            question: '¿Entregaron el medicamento según lo formulado?',
            type: QuestinoType.radioButtonMas,
            options: options_yes_no
        },
        /** 06 */
        {
            formControl: new FormControl('', Validators.required),
            question: '¿Fue entregado la totalidad de los medicamentos?',
            type: QuestinoType.radioButton,
            options: [
                {code:1, text: 'Inmediato'},
                {code:2, text: 'A las 24 horas'},
                {code:3, text: 'Más de 24 horas'}
            ]
        },
        /** 07 */
        {
            formControl: new FormControl('', Validators.required),
            question: 'La farmacia ofrece el servicio de entrega de medicamentos a domicilio?',
            type: QuestinoType.radioButton,
            options: [
                {code:1, text: 'Si'},
                {code:1, text: 'No'},
                {code:3, text: 'No sabe'},
            ]
        },
        /** 08 */
        {
            formControl: new FormControl('', Validators.required),
            question: 'Califique en general el servicio de Farmacia.',
            type: QuestinoType.radioButton,
            options: options_okay_regular_bad
        }
    ]
}