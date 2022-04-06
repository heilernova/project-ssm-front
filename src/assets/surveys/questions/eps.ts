import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ISurveyData } from "src/app/pages/surveys/interfaces/Isurvey";
import { options_score_1_to_5, options_yes_no, QuestinoType } from "../../../app/pages/surveys/interfaces/Iquestions";




export const SurveyEpsData:ISurveyData = {
    name: 'eps',
    nameTitle:'EPS',
    database: 'tb_surveys_eps',
    icon: 'apartment',
    introduction: 'PARA NOSOTROS ES IMPORTANTE CONOCER LA OPINION Y LAS NECESIDADES DE LOS REPRESENTANTES DE LOS USUARIOS DEL MUNICIPIO, PARA ASI DETERMINAR SU INTERES POR LAS ACTIVIDADES DE SALUD, CUMPLIR NUESTRO OBJETIVO SOCIAL Y EN CONJUNTO BUSCAR UN MEJORAMIENTO EN EL SERVICIO PRESTADO; CON SU CALIFICACION PODEMOS OPTIMIZAR LOS PRINCIPALES PROCESOS',
    formGroup: new FormGroup({}),
    salve: false,
    questions: [
        /** 01 */
        {
            formControl: new FormControl('', Validators.required),
            question: 'Nombre de la EPS',
            type: QuestinoType.text,
            inputFormat:{ textTransform:"uppercase"},
            options: []
        },
        /** 02 */
        {
            formControl: new FormControl('', Validators.required),
            question: '¿Cuáles de las siguientes personas lo recibió?',
            type: QuestinoType.radioButtonMas,
            options: [
                { code: 1, text: 'Vigilante' },
                { code: 2, text: 'Promotor' },
                { code: 3, text: 'Recepcionista' }
            ]
        },
        /** 03 */
        {
            formControl: new FormControl('', Validators.required),
            question: 'La atención de la persona que lo recibió fue amable y oportuna?',
            type: QuestinoType.radioButton,
            options: options_yes_no
        },
        /** 04 */
        {
            formControl: new FormControl('', Validators.required),
            note: 'Califique la gestión de la entidad (EAPB) en escala de uno a cinco donde: 1 es muy malo, y 5 es excelente.',
            question: 'Adecuación de la sede de la EAPB',
            type: QuestinoType.radioButton,
            options: options_score_1_to_5
        },
        /** 05 */
        {
            formControl: new FormControl('', Validators.required),
            question: 'Procesos de difusión, canales de atención y capacitación de usuarios y alianzas.',
            type: QuestinoType.radioButton,
            options: options_score_1_to_5
        },
        /** 06 */
        {
            formControl: new FormControl('', Validators.required),
            question: 'Procesos de afiliación, reportes de nacimientos, novedades, portabilidad, movilidad y traslado',
            type: QuestinoType.radioButton,
            options: options_score_1_to_5
        },
        /** 07 */
        {
            formControl: new FormControl('', Validators.required),
            question: 'Procesos de direccionamiento y demanda inducida   (P y P)',
            type: QuestinoType.radioButton,
            options: options_score_1_to_5
        },
        /** 08 */
        {
            formControl: new FormControl('', Validators.required),
            question: 'Procesos de atención para la prestación de servicios en la red',
            type: QuestinoType.radioButton,
            options: options_score_1_to_5
        },
        /** 09 */
        {
            formControl: new FormControl('', Validators.required),
            question: 'Procesos de autorizaciones',
            type: QuestinoType.radioButton,
            options: options_score_1_to_5
        },
        /** 10 */
        {
            formControl: new FormControl('', Validators.required),
            question: 'Proceso de referencia a otro departamento',
            type: QuestinoType.radioButton,
            options: options_score_1_to_5
        },
        /** 11 */
        {
            formControl: new FormControl('', Validators.required),
            question: 'Proceso de quejas, reclamos y solución de inconveniente',
            type: QuestinoType.radioButton,
            options: options_score_1_to_5
        },
        /** 12 */
        {
            formControl: new FormControl('', Validators.required),
            question: 'Como califica la gestión del promotor y el asesor de servicios',
            type: QuestinoType.radioButton,
            options: options_score_1_to_5,
            subQuestions:[
                /** 12.1 */
                {
                    formControl: new FormControl('', Validators.required),
                    question: 'Relaciones interpersonales',
                    type:QuestinoType.radioButton,
                    options: options_score_1_to_5
                },
                /** 12.2 */
                {
                    formControl: new FormControl('', Validators.required),
                    question: 'Gestión frente a la comunidad',
                    type:QuestinoType.radioButton,
                    options: options_score_1_to_5
                }
            ]
        },
        /** 13 */
        {
            formControl: new FormControl('', Validators.required),
            question: 'La gestión que realiza la EAPB en beneficio a los usuarios es',
            type: QuestinoType.radioButton,
            options: options_score_1_to_5
        }
    ]
}