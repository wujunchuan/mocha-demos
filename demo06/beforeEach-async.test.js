var expect = require('chai').expect;

describe("Hook示例", function(){
  var foo = false;

  beforeEach(function(done){
    // 在beforeEach中使用异步操作
    setTimeout(function(){
      foo = true;
      done();
    }, 50);
  });

  it("全局变量异步修改应该成功", function(){
    expect(foo).to.be.equal(true);
  });
});
