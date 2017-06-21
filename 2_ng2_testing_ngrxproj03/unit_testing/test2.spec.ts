//GOAL: testing @Output() 

import VoterComponent from './test2';

fdescribe('voter suite', ()=>{
  let comp;

  //setup. use beforeEach -OR- beforeAll
    //Arrange.Act.Assert.
  beforeEach(()=>{
    comp = new VoterComponent();        //Arrange.
  });


  it('voter spec1', ()=>{
    let voteCount = comp.plusvote();  //Act.
    expect(voteCount).toEqual(1);     //Assert.
  }); //it ends
  it('voter spec2', ()=>{
    let voteCount = comp.minusvote(); //Act.
    expect(voteCount).not.toEqual(1); //Assert.
  }); //it ends

  //added -----------------------------------------------
  //Note: EventEmitter is an observable,
    //spec3: so, we should be able to subscribe() to it.
  it('voter spec3: should raise an event', ()=>{
    //Arrange
      let tmpEvent = null;
      // let comp = new VoterComponent();
      //1. see how @Output someEvent is accessed, like comp.someEvent.
        //if u get undefined errors here, check ur import statement.
      //2. e is data coming with the event i.e. string 'secret-data'.
      //3. unlike promises, when using subscribe,
            //u can assign a global var like tmpEvent to a value which is coming i.e. e.
            //pt.3. is VIMP shit.
    //  comp.someEvent.subscribe(e => tmpEvent = e );
     comp.someEvent.subscribe((e) => {tmpEvent = e} );
    //Act
      comp.minusvote();
    //Assert
    console.log('spec3 for @Output() executing .... ')
    expect(tmpEvent).toEqual('secret-data');
  }); //it ends





    //teardown. use afterEach -OR- afterAll
    afterEach(()=>{
      //nothing to teardown in this simple example, so just log;
      // console.log('afterEach executes');
    });

  }); //fdescribe ends
