import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {


    cards = [

    {imagesource: "./assets/images/eletron.png",type: 1,
    header:"Elektron",
    linkLive:"",linkCode:"https://github.com/Matusz27/Elektron",
    content:"I still work on this project, but it will be finished soon, it’s a electronics ecommerce platfrom, I created it to learn Angular, Django and REST, currently I got stuck on authentication and authorization, as well as creating the cookie to hold the cart. Currently only the code is alviable to view, as the project is not even the minimum viable product stage."},

    {imagesource: "./assets/images/wildfriuts.png",type: 3, 
    header:"Wild Friuts",
    linkLive:"https://steamcommunity.com/sharedfiles/filedetails/?id=2618566294",linkCode:"",
    content:"This project is the most sucesfful modification for game Project Zomboid I made to date, reaching over 5000 subsriptions and over 7000 views and counting, with 50-80 new subscriptions a day taking place on #32 most popular mod in past 3 months, in 40 days I continuely develop it, adding suggestion of user to it, as well as develop new modifications for this game. It uses Lua language for the code part of the modification"},

    
    {imagesource: "./assets/images/bot.png",type: 3,
     header:"Celest bot",
     linkLive:"",linkCode:"https://github.com/Matusz27/Celest-bot",
     content:"This project represents all the discord bots I had created. Being the most complex one of them all, using postrgres to store data, and possesing most functions. They are build using python and discord.py library, I had created sevral bots like this in past few years, the most notable one outside of this one would be the School Bot, that was used by my teacher, back at the start of the pandemic to check attendence."},
    
    {imagesource: "./assets/images/onxy.png",type: 2,
     header:"The Onxy Plane",
     linkLive:"https://matusz27.github.io/Onxy-Plane/Index.html",linkCode:"https://github.com/Matusz27/Onxy-Plane",
     content:"This is a smaller project, that was build over a project my friend Preston made, I expanded on it, fixed design, and code errors, compeltly redone how the details about the towns are displayed, and added the animations using GreenSocks, turning the barebones page into a intresting expirence."}]


  constructor() { }

  ngOnInit(): void {
  }

}
