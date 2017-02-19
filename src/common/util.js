export const promiseChain = (currentPromise, ...nextPromise) =>
  Promise.resolve(currentPromise && currentPromise().then(() =>
    nextPromise.length > 0 && promiseChain(...nextPromise)))

