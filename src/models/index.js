// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Recipe, Ingredient, Instruction, User } = initSchema(schema);

export {
  Recipe,
  Ingredient,
  Instruction,
  User
};