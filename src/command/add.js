const prompt = require('../common/prompt')
const { writeConfig } = require('../common/common')
const { stringify } = require('../common/json')
const { log, chalk } = require('../common/log')
const { compose } = require('../common/util')
const config = require('../../config/templates')

const customSchema = {
  properties: {
    name: {
      description: 'git名称',
      message: 'git名称不能为空',
      required: true,
    },
    git: {
      description: 'git路径',
      message: 'git路径不能为空',
      required: true,
    },
    branch: {
      description: 'git分支(master)',
      message: 'git分支不能为空',
      required: true,
    },
  },
}

const valitInfo = (customInfo) => {
  if (config[customInfo.name] !== undefined) {
    log(chalk.red('Template has already existed!'))
    process.exit()
  }
  return customInfo
}

const getInfo = ({ name, git, branch }) => {
  config[name] = { git, branch }
  return config
}

const addInfo = pkgConfig => writeConfig(stringify(pkgConfig, 2), 'New template added')

module.exports = async() => {
  const customInfo = await prompt(customSchema)
  compose(valitInfo, getInfo, addInfo)(customInfo)
}
