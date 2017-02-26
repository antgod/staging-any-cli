import prompt from 'prompt'

export default schema =>
  new Promise((res, rej) => {
    prompt.start()
    prompt.get(schema, (error, result) => {
      if (error) {
        /*eslint-disable*/
        console.log(error)
        rej(error)
      }
      res(result)
    })
  })