import "babel-polyfill"
import { exec } from 'child_process'
import co from 'co'
import prompt from 'co-prompt'
import chalk from 'chalk'
import config from '../../config/templates.json'

const generatorCode = ()=>({
  gitClone: ({ gitSource, projectName }) => `git clone ${gitSource} ${projectName} && cd ${projectName}`,
  npmInstall: () => 'tnpm i'
})


export default function() {
  co(function *() {
    const { gitlab, name, input } = config
    const projectName = yield prompt(input)
    const gitSource = gitlab[name]

    const cmd = generatorCode();

    console.log(chalk.yellow('\n 开始生成用户自定义组件脚手架'))

    exec(cmd.gitClone({ gitSource, projectName }), (error) => {
      if (error) {
        console.log(error)
        process.exit()
      }
      console.log(chalk.green('\n √ 用户自定义组件脚手架生成完毕'))

      exec(cmd.npmInstall(), (error) => {
        if (error) {
          console.log(error)
        }
        process.exit()
      })
    })
  })
}