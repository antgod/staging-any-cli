const promiseChain = (currentPromise, ...nextPromise) =>
currentPromise && currentPromise().then(() =>
nextPromise.length > 0 && promiseChain(...nextPromise))

const compose = (...funcs) => (...init) => {
  const first = funcs[0]
  const rest = funcs.slice(1)
  return rest.reduce((composed, func) => func(composed), first(...init))
}

module.exports = {
  promiseChain,
  compose,
}
