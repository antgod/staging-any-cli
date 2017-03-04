import { exec } from 'child_process'

export default ({ cmd, cwd }) => () => new Promise((res) => {
  exec(cmd, {
    cwd: cwd || process.cwd(),
    env: process.env,
  }, (error, stdout) => {
    if (error) {
      /*eslint-disable*/
      console.log(error)
      process.exit()
    }
    res(stdout)
  })
})
