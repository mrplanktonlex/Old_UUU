import VoterComponent from './test1';

fdescribe('voter suite', ()=>{
  let comp;

  //setup. use beforeEach -OR- beforeAll
    //Arrange.Act.Assert.

  beforeEach(()=>{
    comp = new VoterComponent;        //Arrange.
  });

  it('voter spec1', ()=>{
    let voteCount = comp.plusvote();  //Act.
    expect(voteCount).toEqual(1);     //Assert.
  }); //it ends
  it('voter spec2', ()=>{
    let voteCount = comp.minusvote(); //Act.
    expect(voteCount).not.toEqual(1); //Assert.
  }); //it ends

    //teardown. use afterEach -OR- afterAll
    afterEach(()=>{
      //nothing to teardown in this simple example, so just log;
      console.log('afterEach executes');
    });

  }); //fdescribe ends
