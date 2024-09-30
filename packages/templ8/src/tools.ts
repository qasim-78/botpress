export type Tool = (...strs: string[]) => string

const nonAlphaNumeric = /[^a-zA-Z0-9]/g
const tokenize = (str: string) => str.split(nonAlphaNumeric)

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)
const uncapitalize = (str: string) => str.charAt(0).toLowerCase() + str.slice(1)
const pascalCase = (...strs: string[]) => strs.flatMap(tokenize).map(capitalize).join('')
const camelCase = (...strs: string[]) =>
  strs
    .flatMap(tokenize)
    .map((s, i) => (i === 0 ? uncapitalize(s) : capitalize(s)))
    .join('')

export const tools = { pascalCase, camelCase } satisfies Record<string, Tool>
