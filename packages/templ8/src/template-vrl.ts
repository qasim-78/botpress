import { execute } from '@bpinternal/verel'

export const format = (templateStr: string, args: Record<string, string>) => {
  return execute(templateStr, args).result
}
