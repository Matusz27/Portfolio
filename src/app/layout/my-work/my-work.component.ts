import { Component, OnInit } from '@angular/core';
import work from "./workshow.json"

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {


  public cards:{imagesource:string, type:number, header:string, 
    linkLive:string, linkCode:string, content:string}[] = work;

  constructor() { }

  ngOnInit(): void {
  }

}
