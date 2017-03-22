var add = require('../src/add.js');
var expect = require('chai').expect;

describe('加法函数的测试', function() {
  // only 表示只运行某个测试的套件或者用例
  it.only('1 加 1 应该等于 2', function() {
    expect(add(1, 1)).to.be.equal(2);
  });

  it('任何数加0应该等于自身', function() {
    expect(add(1, 0)).to.be.equal(1);
  });
  //表示跳过这个测试用例或者套件
  it.skip('任何数加0应该等于自身', function() {
    expect(add(1, 0)).to.be.equal(1);
  });
});
