import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fetured',
  templateUrl: './fetured.component.html',
  styleUrls: ['./fetured.component.scss']
})
export class FeturedComponent implements OnInit {

  linktowork = "https://matusz27.github.io/PilotPage/"
  linktocode = "https://github.com/Matusz27/PilotPage"
  constructor() { }

  ngOnInit(): void {
  }

}
