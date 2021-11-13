import { Component, OnInit } from '@angular/core';
import {faChevronRight} from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  faChevronRight = faChevronRight;

  constructor() { }

  ngOnInit(): void {
  }

}
