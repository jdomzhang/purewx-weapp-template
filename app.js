import './libs/wxPromise.min'
const regeneratorRuntime = require('./libs/regeneratorRuntime')
global.regeneratorRuntime = regeneratorRuntime

// below global data will set somewhere
// global.hasUserAuthorized
// global.user
// global.versionNumber

App({
  onLaunch: async () => {
    console.log('launched...')
  }
})
