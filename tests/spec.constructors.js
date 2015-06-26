describe('new kicker', function(){

  beforeEach(function(){
    this.kicker = new page.kicker();
    console.log(this.kicker);
  });

  it('should be instance of kicker', function(){
    expect(this.kicker).to.be.an.instanceof(page.kicker)
  });


})

describe('new goalie', function(){

  beforeEach(function(){
    this.goalie = new page.goalie();
    console.log(this.goalie);
  });

  it('should be instance of kicker', function(){
    expect(this.goalie).to.be.an.instanceof(page.goalie)
  });


})

describe('myRandom', function(){

  beforeEach(function(){
    var steady = sinon.stub(page, 'myRandom').returns(3);
  });

  it('should be 3', function(){
    expect(page.myRandom()).to.be.equal(3)
  })
})
