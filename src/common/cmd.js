import { exec } from 'child_process'

export default ({ cmd, cwd }) => () => new Promise((res) => {
  // console.log([msg, execStart].join(' '))
  exec(cmd, {
    cwd: cwd || process.cwd(),
    env: process.env,
  }, (error, stdout) => {
    if (error) {
      /*eslint-disable*/
      console.log(error)
      process.exit()
    }
    // console.log([msg, execEnd].join(' '))
    res(stdout)
  })
})
