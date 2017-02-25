const packageConfig = require('../package.json')

if(Object.keys(packageConfig.dependencies).length){
  throw new Error('package.json dependencies must be null')
}