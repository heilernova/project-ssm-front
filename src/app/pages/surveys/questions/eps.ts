import { FormControl, FormGroup } from "@angular/forms";
import { QuestinoType } from "../interfaces/Iquestions";
import { ISurveyData } from "../interfaces/survey";


export const SurveyEpsData:ISurveyData = {
    name: 'eps',
    introduction: '',
    salve: false,
    formGroup: new FormGroup({}),
    questions: [
        {
            formControlName:'eps',
            formControl: new FormControl(),
            question: 'Nombre de la EPS',
            type: QuestinoType.text,
            options: []
        },
        {
            formControl: new FormControl(),
            question: '¿Cuáles de las siguientes personas lo recibió?',
            type: QuestinoType.redioButtonMas,
            options: [
                { code: 1, text: 'Vigilante' },
                { code: 2, text: 'Promotor' },
                { code: 3, text: 'Recepcionista' }
            ]
        }
    ]
}