var expect = require('chai').expect;

/*
 * 默认的每个测试用例最多执行2000ms，使用-t或者--timeout可以指定超时门槛
 */
describe('timeout.test.js - 超时测试', function() {
  it('测试应该 5000 毫秒后结束', function(done) {
    var x = true;
    var f = function() {
      x = false;
      expect(x).to.be.not.ok;
      // 当it块执行的时候传入一个done参数,当测试结束的时候显示调用这个函数,告诉Mocha测试结束了
      // 如果没有这个的话,Mocha就无法知道测试是否结束 会一直等待到超时
      done();
    };
    setTimeout(f, 4000);
  });
});


