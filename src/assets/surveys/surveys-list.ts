
import { ISurveyData } from "src/app/pages/surveys/interfaces/Isurvey";
import { SurveyEpsData } from "./questions/eps";
import { SurveyIPSData } from "./questions/ips";
import { SurveyIPSHospitalizationData } from "./questions/ips-hospitalization";
import { SurveyIPSLaboratoryData } from "./questions/ips-laboratory";
import { SurveyIPSMedicineData } from "./questions/ips-medicine";
import { SurveyIPSOdontologyData } from "./questions/ips-odontology";
import { SurveyIPSPharmacyData } from "./questions/ips-pharmacy";

export const suerveyList:ISurveyData[] = [
    SurveyEpsData,
    SurveyIPSData,
    SurveyIPSHospitalizationData,
    SurveyIPSPharmacyData,
    SurveyIPSLaboratoryData,
    SurveyIPSMedicineData,
    SurveyIPSOdontologyData
]