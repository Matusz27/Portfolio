import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-work-card',
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.scss']
})
export class WorkCardComponent implements OnInit {

  
  @Input() imagesource!:string
  @Input() type!:number; 
  @Input() header!:string
  @Input() content!:string
  @Input() linkLive!:string
  @Input() linkCode!:string


  types = [
    {name:"Unfinished Project", class:"red"},
    {name:"Finished Project", class:"green"},
    {name:"Continuly developed", class:"blue"}
]

  constructor() { }

  ngOnInit(): void {
  }

}
