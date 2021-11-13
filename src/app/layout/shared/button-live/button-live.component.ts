import { Component, OnInit } from '@angular/core';
import {faChevronRight} from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-button-live',
  templateUrl: './button-live.component.html',
  styleUrls: ['./button-live.component.scss']
})
export class ButtonLiveComponent implements OnInit {

    faChevronRight = faChevronRight;


  constructor() { }

  ngOnInit(): void {
  }

}
