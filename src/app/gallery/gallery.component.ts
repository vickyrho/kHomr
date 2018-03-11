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
  modal:any ;
  constructor(private mainService : MainService) { }

  ngOnInit() {
    this.assign();
    $('#myModal').click(function(){
      console.log('clicked');
      this.modal = document.getElementById('myModal');
      this.modal.style.display = "none";
    });
  }

  // function to initialize the values for the image array //

  assign(){
    // uses main service to recevie objects from backend //
      this.mainService.getImages().subscribe(
        response => {
          this.res = response;
          this.images = this.res.data ;
          this.imageList = [{id:'2007',name:'Kurukshetra7',direction:'direction-l'},{id:'2008',name:'Kurukshetra8',direction:'direction-r'},{id:'2009',name:'Kurukshetra9',direction:'direction-l'},{id:'2010',name:'Kurukshetra10',direction:'direction-r'}
          ,{id:'2011',name:'Kurukshetra11',direction:'direction-l'},{id:'2012',name:'Kurukshetra12',direction:'direction-r'},{id:'2013',name:'Kurukshetra13',direction:'direction-l'},
            {id:'2014',name:'Kurukshetra14',direction:'direction-r'},{id:'2015',name:'Kurukshetra15',direction:'direction-l'},
            {id:'2016',name:'Kurukshetra16',direction:'direction-r'},{id:'2017',name:'Kurukshetra17',direction:'direction-l'},{id:'2018',name:'Kurukshetra18',direction:'direction-r'}];
        }
      );

      // this.imageList = ['../../assets/K5.jpg','../../assets/K3.jpg','../../assets/K.jpg','../../assets/new.jpg','../../assets/1.jpg','https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop','../../assets/robo.png','../../assets/code.jpg','../../assets/sh.jpg'];
      //
  }

  openModel(){
    this.modal = document.getElementById('myModal');
    this.modal.style.display = "block";
    console.log('opened');
    // The K kore list which has dummy data temperorly . Data can be added from the back end //

  }

  // CLOSES MODEL //

  closeModel(){
    this.modal = document.getElementById('myModal');
    this.modal.style.display = "none";
  }

}
