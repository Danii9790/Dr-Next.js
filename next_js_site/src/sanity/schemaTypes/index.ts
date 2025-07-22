import { type SchemaTypeDefinition } from 'sanity'
import { doctor } from './doctor'
import appointment from './appointment'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [doctor,appointment],
}
