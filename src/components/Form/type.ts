import { Control, FieldErrors } from "react-hook-form"
import { FormInputsType } from "../../types/auth"

export interface FormInterface{
    formInputs:FormInputsType[]
    control:Control
    errors:FieldErrors
}