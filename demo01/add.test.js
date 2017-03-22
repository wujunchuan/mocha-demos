var add = require('./add.js');
/*断言库种类很多，Mocha不限制使用哪种，这句话标识引入的断言库是Chai，并且制定使用它的expect断言风格*/
/*
 * 使用expect断言优点是很接近自然语言
 * 下面的例子
 * // 相等或者不相等
 * expect(4+5).to.be.equal(9);
 * expect(4+5).to.be.equal(10);
 * epxect(foo).to.be.deep.equal({bar:'baz'});
 * //布尔值为true
 * expect('evering').to.be.ok;
 * expect(false).to.not.be.ok;
 * //typeof
 * epxect('test').to.be.a('string');
 * //include
 * expect([1,2,3]).to.include(2);
 * //empty
 * expect('').to.be.empty;
 * //match
 * expect('foorbar').to.match((/^foo);
 */
var expect = require('chai').expect;

/*describe块被称为测试套件*/
describe('加法函数的测试', function() {
  /*it块被称为测试用例，标识一个单独的测试，是测试的最小单位*/
  it('1 加 1 应该等于 2', function() {
    /*这就是传说中的‘断言’ 断言就是判断源码实际执行结果是否与预期结果一致，如果不一致就抛出错误*/
    expect(add(1, 1)).to.be.equal(2);
  });
});
/**
 * 使用方法，在命令行输入
 * mocha add.test.js
 * 如果有多个测试脚本
 * mocha file1 file2 file3
 *
 * 递归测试:这时候test沐浴露下面所有测试用例，不管在哪一层都会执行
 * mocha --recursive
 * 可以使用通配符来指定测试脚本范围
 * eg:
 *   mocha spec/{my,awesome}.js 执行spect 目录下面的my.js与awesome.js文件
 * 除了使用Shell通配符，还可以使用Node通配符
 * mocha 'test/**//*.@(js|jsx)' 运行test目录下任何子目录中文件后缀名为js或者jsx的测试脚本
 */
