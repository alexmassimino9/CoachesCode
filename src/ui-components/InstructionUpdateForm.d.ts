/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Instruction } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type InstructionUpdateFormInputValues = {
    name?: string;
    quantity?: string;
};
export declare type InstructionUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    quantity?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InstructionUpdateFormOverridesProps = {
    InstructionUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    quantity?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type InstructionUpdateFormProps = React.PropsWithChildren<{
    overrides?: InstructionUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    instruction?: Instruction;
    onSubmit?: (fields: InstructionUpdateFormInputValues) => InstructionUpdateFormInputValues;
    onSuccess?: (fields: InstructionUpdateFormInputValues) => void;
    onError?: (fields: InstructionUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InstructionUpdateFormInputValues) => InstructionUpdateFormInputValues;
    onValidate?: InstructionUpdateFormValidationValues;
} & React.CSSProperties>;
export default function InstructionUpdateForm(props: InstructionUpdateFormProps): React.ReactElement;
