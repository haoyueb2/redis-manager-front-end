module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/redis-manager-front-end/'
      : '/'
  }