import { Injectable } from '@angular/core';
import testi from "./testimonials.json"

@Injectable({
  providedIn: 'root'
})

export class TestimonialsService {

  constructor() { }

  public cards:{
    content:string,
    traslation:string, 
    author:string, 
    occupation:string,
    firm:string
    }[] = testi;

  getestimonials(){
    return this.cards
  }
}
