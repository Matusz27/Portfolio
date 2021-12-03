import { Injectable } from '@angular/core';
import work from "./workshow.json"

@Injectable({
  
  providedIn: 'root'
})
export class WorkdisplayService {

  constructor(){}

  public cards:{imagesource:string, type:number, fetured:boolean, header:string, 
    linkLive:string, linkCode:string, content:string}[] = work;

  getFetured(){
    return this.cards.find(card => card.fetured)
  }

  getNotFetured(){
    return this.cards.filter(card => !card.fetured)
  }

}
