describe("countupby", function(){
  it('it takes a target and a multiple and counts to that target', function(){
    expect(countupby(5,5)).to.eql([5])
  });

  it('it takes a target and a multiple and counts to that target', function(){
    expect(countupby(50,7)).to.eql([7,14, 21, 28, 35, 42, 49])
  });
});
