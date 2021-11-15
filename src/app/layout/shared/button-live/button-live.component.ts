import { Component, OnInit, Input } from '@angular/core';
import {faChevronRight} from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-button-live',
  templateUrl: './button-live.component.html',
  styleUrls: ['./button-live.component.scss']
})
export class ButtonLiveComponent implements OnInit {
  
  @Input() link!:string

  faChevronRight = faChevronRight;
  

  constructor() { }

  ngOnInit(): void {
  }

}
