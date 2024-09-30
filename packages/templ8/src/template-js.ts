import { tools } from './tools'

export const format = (templateStr: string, args: Record<string, string>) => {
  const code = [
    ...Object.keys(tools).map((tool) => `const ${tool} = tools['${tool}']`),
    ...Object.keys(args).map((arg) => `const ${arg} = args['${arg}']`),
    `return ${templateStr}`,
  ].join('\n')
  return new Function('tools', 'args', code)(tools, args)
}
