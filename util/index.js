import { apiRoot } from '../services/apiroot.autogen'

export const versioning = (obj) => {
  var isObj = typeof obj === 'object'
  var jsonText = isObj ? JSON.stringify(obj) : obj
  jsonText = jsonText.replace(/.jpg/g, '.jpg?v=' + global.versionNumber)
  return isObj ? JSON.parse(jsonText) : jsonText
}

export const formatImageURL = (url) => {
  let fullURL = this.versioning(url)
  var hasScheme = RegExp(/[http|https]:\/\//).test(url)
  if (!hasScheme) {
    fullURL = apiRoot + fullURL
  }
  return fullURL
}
