Keep karma.conf.js and package.json outside src/ and 
    where .angular-cli.json and package-lock.json are i.e. in ngrxproj03/ folder and not in any sub folder
    
    
    
Remember:-
  -- use only jasmine for unit testing. eg. new Component();
  -- use TestBed for integration testing . dont use new Component() here. 
  Angular should be able to create an instance of ur component and get it to you (using testbed).
  
  
snippets.cson

'.source.ts':
  'jasmine describe':
    'prefix': 'jd'
    'body': """
      describe('', ()=>{
        it('', ()=>{
          expect().toBe();
          });
        });
    """
  
  Note:- 
        > .source.ts for typescript, .source.js for javascript (extension) files 
        > no comma between prefix n body
        > tab indented like python and NO {}
        > prefix should be initials of the description eg. jd FOR jasmine describe. cannot use jdx or something else.
