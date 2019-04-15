const hardLimit = 10

/**
 * Increment the "slot not found" counter.
 * When the counter reach its limit, the "notExtracted" flag is set and will make trigger the "On not found" transition.
 * @hidden true
 * @param retryAttempts The maximum number of times a slot extraction gets retried
 */
const slotNotFound = async retryAttempts => {
  if (retryAttempts > hardLimit) {
    temp.notExtracted = 'true'
    return
  }

  if (!session.extractedSlots.notFound) {
    session.extractedSlots.notFound = 1
  }

  if (session.extractedSlots.notFound < Number(retryAttempts)) {
    session.extractedSlots.notFound++
  } else {
    temp.notExtracted = 'true'
  }
}

return slotNotFound(args.retryAttempts)
