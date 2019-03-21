import { apiRoot, debug } from '../services/apiroot.autogen'

module.exports = Behavior({
  data: {
    apiRoot: apiRoot
  },

  attached () {
  },

  methods: {
    log () {
      if (debug) {
        console.log.apply(null, arguments)
      }
    }
  }

})
