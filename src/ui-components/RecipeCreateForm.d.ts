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
export declare type RecipeCreateFormInputValues = {
    title?: string;
    description?: string;
    instructions?: string[];
};
export declare type RecipeCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    instructions?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RecipeCreateFormOverridesProps = {
    RecipeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    instructions?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RecipeCreateFormProps = React.PropsWithChildren<{
    overrides?: RecipeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RecipeCreateFormInputValues) => RecipeCreateFormInputValues;
    onSuccess?: (fields: RecipeCreateFormInputValues) => void;
    onError?: (fields: RecipeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RecipeCreateFormInputValues) => RecipeCreateFormInputValues;
    onValidate?: RecipeCreateFormValidationValues;
} & React.CSSProperties>;
export default function RecipeCreateForm(props: RecipeCreateFormProps): React.ReactElement;
