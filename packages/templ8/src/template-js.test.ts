import { test, expect } from 'vitest'
import { format } from './template-js'

test('template-js', () => {
  const templateStr = 'camelCase(entityName, functionName)'

  expect(format(templateStr, { entityName: 'user', functionName: 'create' })).toEqual('userCreate')
  expect(format(templateStr, { entityName: 'user', functionName: 'read' })).toEqual('userRead')
  expect(format(templateStr, { entityName: 'user', functionName: 'update' })).toEqual('userUpdate')
  expect(format(templateStr, { entityName: 'user', functionName: 'delete' })).toEqual('userDelete')
  expect(format(templateStr, { entityName: 'user', functionName: 'list' })).toEqual('userList')

  expect(format(templateStr, { entityName: 'event', functionName: 'create' })).toEqual('eventCreate')
  expect(format(templateStr, { entityName: 'event', functionName: 'read' })).toEqual('eventRead')
  expect(format(templateStr, { entityName: 'event', functionName: 'update' })).toEqual('eventUpdate')
  expect(format(templateStr, { entityName: 'event', functionName: 'delete' })).toEqual('eventDelete')
  expect(format(templateStr, { entityName: 'event', functionName: 'list' })).toEqual('eventList')

  expect(format(templateStr, { entityName: 'issue', functionName: 'create' })).toEqual('issueCreate')
  expect(format(templateStr, { entityName: 'issue', functionName: 'read' })).toEqual('issueRead')
  expect(format(templateStr, { entityName: 'issue', functionName: 'update' })).toEqual('issueUpdate')
  expect(format(templateStr, { entityName: 'issue', functionName: 'delete' })).toEqual('issueDelete')
  expect(format(templateStr, { entityName: 'issue', functionName: 'list' })).toEqual('issueList')
})
