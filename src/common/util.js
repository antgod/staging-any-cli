export const promiseChain = (currentPromise, ...nextPromise) =>
  currentPromise && currentPromise().then(() =>
    nextPromise.length > 0 && promiseChain(...nextPromise))

