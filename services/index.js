const { regeneratorRuntime } = global

import fetch from './fetch'

// module.exports.getVersion = async () => fetch(`/userdata/weapp/res/version.json`)
module.exports.getVersion = async () => '1.0.1'

module.exports.sayHello = async () => fetch(`/api/v1/hello`)

module.exports.login = async (code) => fetch(`/api/v1/wechat/login`, {code})

module.exports.getWXPhoneNumber = async (detail) => fetch(`/api/v1/wechat/getphonenumber`, detail, 'POST')

module.exports.getWXUserInfo = async (detail) => fetch(`/api/v1/wechat/getuserinfo`, detail, 'POST')

module.exports.storeWXFormID = async (formID) => fetch(`/api/v1/wechat/storeformid`, {formID}, 'POST')
