import { WorkdisplayService } from './../../services/workdisplay.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {
  
  
  cards = this.workdisplay.getFetured()

  selectedOption:boolean[] = []

  types = [
    {name:"Unfinished Project", class:"red"},
    {name:"Finished Project", class:"green"},
    {name:"Continuly developed", class:"blue"},
    {name:"In Development", class:"yellow"}
]

  constructor(private workdisplay: WorkdisplayService) { }


  ngOnInit(): void {
    for(let i = 0; i < this.cards.length; i++){
      this.selectedOption.push(true) 
    }
  }

  changeDisplay(clicked:number, id:number){
    if (clicked === 1){
      this.selectedOption[id] = true
      return
    }
    this.selectedOption[id] = false
  }

}
