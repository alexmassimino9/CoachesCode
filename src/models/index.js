// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Team, Player } = initSchema(schema);

export {
  User,
  Team,
  Player
};