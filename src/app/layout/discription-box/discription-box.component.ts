import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-discription-box',
  templateUrl: './discription-box.component.html',
  styleUrls: ['./discription-box.component.scss']
})
export class DiscriptionBoxComponent implements OnInit {

  constructor() { }

  @Input() card:any

  selectedOption:boolean = true

  ngOnInit(): void {
  }

  changeDisplay(clicked:number){
    if (clicked === 1){
      this.selectedOption = true
      return
    }
    this.selectedOption = false
  }


}
