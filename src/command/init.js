import 'babel-polyfill'
import fs from 'fs'
import path from 'path'
import { promiseChain } from '../common/util'
import cmd from '../common/cmd'
import prompt from '../common/prompt'
import { stringify } from '../common/json'

const initCommands = commands => commands.map(command => cmd(command))

export const customSchema = {
  properties: {
    device: {
      description: '设备(pc/mobile)',
      pattern: /^pc$|^mobile$/,
      message: '设备必须是pc/mobile中之一，且不能为空',
      required: true,
    },
    directory: {
      description: '发布包名',
      /*eslint-disable*/
      pattern: /^[a-zA-Z\-\_\d]+$/,
      message: '目录只能包含字母/数字/下划线/中划线，且不能为空',
      required: true,
    },
  },
}

const parseCommands = (gitUrl, directory)=>
  [{
    cmd: `git clone ${gitUrl} ${directory}`,
  }, {
    cmd: `rm -rf ./.git`,
    cwd: path.join(process.cwd(), directory),
  }, {
    cmd: 'tnpm i',
    cwd: path.join(process.cwd(), directory),
  }
]

const getPackage = (behavior, directory, relativePath, code) => () => behavior(path.join(process.cwd(), directory, relativePath), code)
const parsePackage = packageMessage => JSON.parse(packageMessage)
const resolvePackageName = directory => packageMessage => stringify({ ...packageMessage, name: directory }, 2)
const setPackageName = (behavior, directory, relativePath, callback) => packageMessage => behavior(path.join(process.cwd(), directory, relativePath), packageMessage, callback)

const generatorProject = async function(config) {
  const { custom, source } = config
  const customComponents = source[custom]
  const customs = await prompt(customSchema)
  const { device, directory } = customs
  const gitUrl = customComponents[device]

  console.log('自定义组件配置开始')
  promiseChain(...initCommands(parseCommands(gitUrl, directory))).then(getPackage(fs.readFileSync, directory, 'package.json', 'utf8')).then(parsePackage).then(resolvePackageName(directory)).then(setPackageName(fs.writeFile, directory, 'package.json', (err)=> {
    if (err) throw err;
    console.log('自定义组件配置结束')
  }))
}

export default generatorProject