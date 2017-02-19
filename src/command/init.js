import "babel-polyfill"
import path from 'path'
import { promiseChain } from '../common/util'
import cmd from '../common/cmd'
import prompt from '../common/prompt'
import { CUSTOM_SCHEMA } from '../common/constant'

const parseCommands = (gitUrl, directory)=>
  [{
    cmd: `git clone ${gitUrl} ${directory}`,
    msg: '下载脚手架'
  }, {
    cmd: `rm -rf ./.git`,
    cwd: path.join(process.cwd(), directory),
    msg: '删除git配置文件'
  }]

const initCommands = commands => commands.map(command=> cmd(command))

const generatorProject = async function(config) {
  const { custom, source } = config
  const customComponents = source[custom]
  const customs = await prompt(CUSTOM_SCHEMA)
  const { device, directory } = customs
  const gitUrl = customComponents[device]

  promiseChain(...initCommands(parseCommands(gitUrl, directory)));
}

export default generatorProject