module.exports = {
  /**
   For a regular node deployment, use the code below in this comment block. Commented for now in favor of a docker deployment
   db: 'mongodb://localhost:27017'
   */
    db: process.env.REACT_APP_MONGO_URL
  }