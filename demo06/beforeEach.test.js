var expect = require('chai').expect;

describe('beforeEach示例', function() {
  var foo = false;

  /* 这里使用测试用例的钩子,在测试用例
   * 类似的还有before after beforeEach afterEach
   * 和Junit一样
   */
  beforeEach(function() {
    // 本代码将在本区块的**每个**测试用例执行之前执行
    foo = true;
  });

  it('修改全局变量应该成功', function() {
    // 因为beforeEach在it之前执行,所有foo被修改为true 因此测试通过
    expect(foo).to.be.equal(true);
  });
});
