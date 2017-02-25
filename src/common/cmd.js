import { exec } from 'child_process'
const execStart = '执行开始'
const execEnd = '执行完毕'

export default ({ cmd, msg, cwd }) => () => new Promise((res) => {
  console.log([msg, execStart].join(' '))
  exec(cmd, {
    cwd: cwd || process.cwd(),
    env: process.env,
  }, (error, stdout) => {
    if (error) {
      console.log(error)
      process.exit()
    }
    console.log([msg, execEnd].join(' '))
    res(stdout)
  })
})
