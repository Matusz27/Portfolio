import { Component, OnInit, Input } from '@angular/core';
import {faGithub} from "@fortawesome/free-brands-svg-icons"

@Component({
  selector: 'app-button-code',
  templateUrl: './button-code.component.html',
  styleUrls: ['./button-code.component.scss']
})
export class ButtonCodeComponent implements OnInit {

  faGithub = faGithub

  @Input() link!:string

  constructor() { }

  ngOnInit(): void {
  }

}
