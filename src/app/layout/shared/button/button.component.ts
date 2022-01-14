import { Component, OnInit } from '@angular/core';
import {faChevronDown} from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  faChevronDown = faChevronDown;

  constructor() { }

  ngOnInit(): void {
  }

}
