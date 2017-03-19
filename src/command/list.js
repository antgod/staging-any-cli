const { stringify } = require('../common/json')
const { log, chalk } = require('../common/log')
const config = require('../../config/templates')

module.exports = () => log(chalk.green(stringify(config, 2)))
