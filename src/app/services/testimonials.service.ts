import { Injectable } from '@angular/core';
import testi from "./testimonials.json"

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {

  constructor() { }

  public cards:{
    name:number, 
    postion:boolean, 
    content:string}[] = testi;

  getFetured(){
    return this.cards
  }
}
