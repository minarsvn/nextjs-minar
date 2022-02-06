const withPWA = require('next-pwa')

module.exports = withPWA({
    pwa: {
        dest: 'public'
    }
})
// next.config.js
module.exports = {
  swcMinify: true
}
