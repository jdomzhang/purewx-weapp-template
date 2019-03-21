const { regeneratorRuntime } = global

import fetch from './fetch'

// export const getVersion = async () => fetch(`/userdata/weapp/res/version.json`)
export const getVersion = async () => '1.0.1'

export const sayHello = async () => fetch(`/api/v1/hello`)

export const login = async (code) => fetch(`/api/v1/wechat/login`, {code})

export const getWXPhoneNumber = async (detail) => fetch(`/api/v1/wechat/getphonenumber`, detail, 'POST')

export const getWXUserInfo = async (detail) => fetch(`/api/v1/wechat/getuserinfo`, detail, 'POST')

export const storeWXFormID = async (formID) => fetch(`/api/v1/wechat/storeformid`, {formID}, 'POST')
