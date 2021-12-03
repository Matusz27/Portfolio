import { Component, OnInit } from '@angular/core';
import { WorkdisplayService } from './../../services/workdisplay.service';

@Component({
  selector: 'app-fetured',
  templateUrl: './fetured.component.html',
  styleUrls: ['./fetured.component.scss']
})
export class FeturedComponent implements OnInit {

  card = this.workdisplay.getFetured()

  constructor(private workdisplay: WorkdisplayService) { }

  ngOnInit(): void {
  }

}
