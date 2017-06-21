import {Component, Output, EventEmitter} from '@angular/core';

@Component({
})

export default class VoterComponent{
  vote:number = 0;
  @Output() someEvent = new EventEmitter(); //added

  plusvote(){
    this.vote++ ;
    return this.vote;
  }

  minusvote(){
    this.vote--;
    // this.someEvent.emit ({myVote:'secret-data'}); //added
    //lets emit a string for now.
    this.someEvent.emit ('secret-data'); //added
    return this.vote;
  }

} //VoterComponent ends
