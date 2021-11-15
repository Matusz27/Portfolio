import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {


  cards = [
    {imagesource: "/assets/vector_images/angular.svg", header:"Frontend Development",
    content:"I work with Angular to create Frontend applications. I also  learn React, but I put focus on Angular currently. For styling I use SCSS. I know vanilla javascript and typescript, often using Greensocks and ScrollReveal liberies"},
    {imagesource: "/assets/vector_images/python.svg", header:"Backend Development",
    content:"For the backend I use Python with Django/Flask libaries. I know how to create REST aplications as well as server rendered web pages.I use PostgresSQL as database of choice and know how to use MySQL"},
    {imagesource: "/assets/vector_images/Pointer.svg", header:"UI/UX Design",
    content:"In this area I am least skilled at, but I can create quite compeling, easy to navigate and good looking expirences. Still I need to get some more expirence creating expirences for the users to become proficient with Design "}]

  constructor() { }

  ngOnInit(): void {
  }

}
