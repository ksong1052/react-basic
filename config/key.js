if(process.env.NODE_ENV === 'production'){
  // 배포 이 후에 
  module.exports = require('./prod');
} else {
  // 개발 중에
  module.exports = require('./dev');
}