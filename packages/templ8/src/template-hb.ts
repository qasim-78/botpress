import * as hb from 'handlebars'
import { tools } from './tools'

const pascalCase = (s: string) => tools.pascalCase(s)
const camelCase = (s: string) => tools.camelCase(s)

hb.registerHelper('pascalCase', pascalCase)
hb.registerHelper('camelCase', camelCase)

export const format = (templateStr: string, args: Record<string, string>) => {
  const template = hb.compile(templateStr)
  return template(args)
}
