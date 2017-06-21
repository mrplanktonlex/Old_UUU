
import {Component} from '@angular/core';

@Component({
})

export default class VoterComponent{
vote:number = 0;

  plusvote(){
    this.vote++ ;
    return this.vote;
  }

  minusvote(){
    this.vote--;
    return this.vote;
  }
}
