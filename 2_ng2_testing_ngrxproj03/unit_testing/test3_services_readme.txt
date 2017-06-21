Testing Services:-
1. Only a service. (has lot of restrictions especially using HTTP).
2. Component using a service and
3. Service using a service. 

Scenario #1:- (So, testing service alone doesnt seem to work; so its better to test scenario #2 and #3)

t3_service.ts:-
export default  class PlanktonService{
  url:string = 'https://api.github.com/users/planktonlex55/repos' ;
  // constructor(private _http: Http){ //gives errors
  constructor(){
  }

  getRepos(){
    return ('xxxx');
	}
}


test3.spec.ts:-
import PlanktonService from './test3_service'; //named export. braces r reqd.

fdescribe('Suite: Component using a Service', ()=>{
  let pserv: PlanktonService;

  beforeEach(()=>{
    pserv = new PlanktonService(); //errors w/o null.
  });

  it('spec1: test service', ()=>{
      console.log(pserv);
      let repos = pserv.getRepos();
      console.log(repos);
      expect(repos).toEqual('xxxx');
    });

  }); //describe ends



