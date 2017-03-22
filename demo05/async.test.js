var request = require('superagent');
var expect = require('chai').expect;

describe('async.test.js - 异步测试', function() {
  it('异步请求应该返回一个对象', function(done){
    request
      .get('https://api.github.com')
      .end(function(err, res){
        expect(res).to.be.an('object');
        // Mocha内置对promise的支持,可以不显示调用done方法
        // 可以参考promise.test.js文件
        done();
      });
  });
});
