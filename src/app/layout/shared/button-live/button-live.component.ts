import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-live',
  templateUrl: './button-live.component.html',
  styleUrls: ['./button-live.component.scss']
})
export class ButtonLiveComponent implements OnInit {
  
  @Input() link!:string

  constructor() { }

  ngOnInit(): void {
  }

}
