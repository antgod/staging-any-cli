import prompt from 'prompt'

export default (schema) =>
  new Promise((res, rej)=> {
    prompt.start()
    prompt.get(schema, function(error, result) {
      if (error) {
        console.log(error)
        rej(error)
      }
      res(result)
    });
  })