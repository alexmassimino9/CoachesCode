// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Recipe, Instruction, Ingredient } = initSchema(schema);

export {
  Recipe,
  Instruction,
  Ingredient
};