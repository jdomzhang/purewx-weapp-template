import { apiRoot, debug } from '../services/apiroot.autogen'
// import verCommon from './ver'

module.exports = Behavior({
  data: {
    apiRoot: apiRoot
  },

  methods: {
    log () {
      if (debug) {
        console.log.apply(null, arguments)
      }
    // },

    // formatImageURL (url) {
    //   let fullURL = this.versioning(url)
    //   var hasScheme = RegExp(/[http|https]:\/\//).test(url)
    //   if (!hasScheme) {
    //     fullURL = this.apiRoot + fullURL
    //   }
    //   return fullURL
    }
  }

})
