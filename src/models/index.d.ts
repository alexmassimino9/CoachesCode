import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerRecipe = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Recipe, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly ingredients?: Ingredient[] | null;
  readonly instructions?: Instruction[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRecipe = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Recipe, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly ingredients: AsyncCollection<Ingredient>;
  readonly instructions: AsyncCollection<Instruction>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Recipe = LazyLoading extends LazyLoadingDisabled ? EagerRecipe : LazyRecipe

export declare const Recipe: (new (init: ModelInit<Recipe>) => Recipe) & {
  copyOf(source: Recipe, mutator: (draft: MutableModel<Recipe>) => MutableModel<Recipe> | void): Recipe;
}

type EagerIngredient = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Ingredient, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly quantity?: string | null;
  readonly recipeID: string;
  readonly recipe?: Recipe | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly recipeIngredientsId?: string | null;
}

type LazyIngredient = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Ingredient, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly quantity?: string | null;
  readonly recipeID: string;
  readonly recipe: AsyncItem<Recipe | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly recipeIngredientsId?: string | null;
}

export declare type Ingredient = LazyLoading extends LazyLoadingDisabled ? EagerIngredient : LazyIngredient

export declare const Ingredient: (new (init: ModelInit<Ingredient>) => Ingredient) & {
  copyOf(source: Ingredient, mutator: (draft: MutableModel<Ingredient>) => MutableModel<Ingredient> | void): Ingredient;
}

type EagerInstruction = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Instruction, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly description: string;
  readonly recipeID: string;
  readonly recipe?: Recipe | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly recipeInstructionsId?: string | null;
}

type LazyInstruction = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Instruction, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly description: string;
  readonly recipeID: string;
  readonly recipe: AsyncItem<Recipe | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly recipeInstructionsId?: string | null;
}

export declare type Instruction = LazyLoading extends LazyLoadingDisabled ? EagerInstruction : LazyInstruction

export declare const Instruction: (new (init: ModelInit<Instruction>) => Instruction) & {
  copyOf(source: Instruction, mutator: (draft: MutableModel<Instruction>) => MutableModel<Instruction> | void): Instruction;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly firstName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly firstName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}