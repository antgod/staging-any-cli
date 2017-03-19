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
  },
}

const valitInfo = (customInfo) => {
  if (config[customInfo.name] === undefined) {
    log(chalk.red("Template doesn't existed!"))
    process.exit()
  }
  return customInfo
}

const getInfo = ({ name }) => {
  delete config[name]
  return config
}

const delInfo = pkgConfig => writeConfig(stringify(pkgConfig, 2), 'Template has been delete')

module.exports = async() => {
  const customInfo = await prompt(customSchema)
  compose(valitInfo, getInfo, delInfo)(customInfo)
}
