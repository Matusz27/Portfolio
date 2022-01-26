import { TestimonialsService } from './../../services/testimonials.service';
import { Component, OnInit } from '@angular/core';
import {faStar} from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  constructor(private TestiService: TestimonialsService) {}

  faStar = faStar

  testimonials = this.TestiService.getestimonials()

  ngOnInit(): void {
    
  }

}
