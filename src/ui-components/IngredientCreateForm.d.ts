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
export declare type IngredientCreateFormInputValues = {
    name?: string;
    quantity?: string;
    recipeID?: string;
};
export declare type IngredientCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    quantity?: ValidationFunction<string>;
    recipeID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type IngredientCreateFormOverridesProps = {
    IngredientCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    quantity?: PrimitiveOverrideProps<TextFieldProps>;
    recipeID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type IngredientCreateFormProps = React.PropsWithChildren<{
    overrides?: IngredientCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: IngredientCreateFormInputValues) => IngredientCreateFormInputValues;
    onSuccess?: (fields: IngredientCreateFormInputValues) => void;
    onError?: (fields: IngredientCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: IngredientCreateFormInputValues) => IngredientCreateFormInputValues;
    onValidate?: IngredientCreateFormValidationValues;
} & React.CSSProperties>;
export default function IngredientCreateForm(props: IngredientCreateFormProps): React.ReactElement;
