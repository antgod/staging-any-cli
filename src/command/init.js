import "babel-polyfill"
import path from 'path'
import { promiseChain } from '../common/util'
import cmd from '../common/cmd'
import prompt from '../common/prompt'

const initCommands = commands => commands.map(command=> cmd(command))

export const customSchema = {
  properties: {
    device: {
      description: '设备(pc/mobile)',
      pattern: /^pc$|^mobile$/,
      message: '设备必须是pc/mobile中之一，且不能为空',
      required: true
    },
    directory: {
      description: '本地目录',
      pattern: /^[a-zA-Z\-\_\d]+$/,
      message: '目录只能包含字母/数字/下划线/中划线，且不能为空',
      required: true
    }
  }
};

const parseCommands = (gitUrl, directory)=>
  [{
    cmd: `git clone ${gitUrl} ${directory}`,
    msg: '下载脚手架'
  }, {
    cmd: `rm -rf ./.git`,
    cwd: path.join(process.cwd(), directory),
    msg: '删除git配置文件'
  }, {
    cmd: 'tnpm i',
    cwd: path.join(process.cwd(), directory),
    msg: '安装依赖包'
  }]

const generatorProject = async function(config) {
  const { custom, source } = config
  const customComponents = source[custom]
  const customs = await prompt(customSchema)
  const { device, directory } = customs
  const gitUrl = customComponents[device]

  promiseChain(...initCommands(parseCommands(gitUrl, directory)));
}

export default generatorProject