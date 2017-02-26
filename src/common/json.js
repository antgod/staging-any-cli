module.exports = {
  stringify: (data, space) => {
    const seen = []
    return JSON.stringify(data, (key, val) => {
      if (!val || typeof val !== 'object') {
        return val
      }
      if (seen.indexOf(val) !== -1) {
        return '[Circular]'
      }
      seen.push(val)
      return val
    }, space)
  },
}

