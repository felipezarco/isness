
import * as character from './character.ts'
import * as date from './date.ts'
import * as type from './type.ts'

const is = {
  ...character,
  ...date,
  ...type
}

export default is

export {
  character,
  date,
  type
}
