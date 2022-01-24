import { WorkdisplayService } from './../../services/workdisplay.service';
import { Component, OnInit } from '@angular/core';
import { GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {
  
  
  cards = this.workdisplay.getFetured()

  images:GalleryItem[][] = []

  types = [
    {name:"Unfinished Project", class:"red"},
    {name:"Finished Project", class:"green"},
    {name:"Continuly developed", class:"blue"},
    {name:"In Development", class:"yellow"}
]

  constructor(private workdisplay: WorkdisplayService) { }


  ngOnInit(): void {
    for(let i = 0; i < this.cards.length; i++){
      this.images.push(getImages(this.cards[i].imagesource))
    }
  }
}

function getImages(images:any){
  let imagesOut:any[] = []
  images.forEach((image:string) => {
    imagesOut.push(new ImageItem({src:image, thumb:image}))
  });
  return imagesOut
}