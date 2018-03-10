import { Component, OnInit } from '@angular/core';
import { MainService} from '../main.service';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [MainService]
})
export class GalleryComponent implements OnInit {

  imageList : any ;
  images : any ;
  res: any ;
  constructor(private mainService : MainService) { }

  ngOnInit() {
    this.assign();
  }

  // function to initialize the values for the image array //

  assign(){
    // uses main service to recevie objects from backend //
      this.mainService.getImages().subscribe(
        response => {
          this.res = response;
          this.images = this.res.data ;
        }
      );

      // this.imageList = ['../../assets/K5.jpg','../../assets/K3.jpg','../../assets/K.jpg','../../assets/new.jpg','../../assets/1.jpg','https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop','../../assets/robo.png','../../assets/code.jpg','../../assets/sh.jpg'];
      //
  }
}
