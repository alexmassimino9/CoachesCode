/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type InstructionCreateFormInputValues = {
    name?: string;
    quantity?: string;
};
export declare type InstructionCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    quantity?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InstructionCreateFormOverridesProps = {
    InstructionCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    quantity?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type InstructionCreateFormProps = React.PropsWithChildren<{
    overrides?: InstructionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: InstructionCreateFormInputValues) => InstructionCreateFormInputValues;
    onSuccess?: (fields: InstructionCreateFormInputValues) => void;
    onError?: (fields: InstructionCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InstructionCreateFormInputValues) => InstructionCreateFormInputValues;
    onValidate?: InstructionCreateFormValidationValues;
} & React.CSSProperties>;
export default function InstructionCreateForm(props: InstructionCreateFormProps): React.ReactElement;
