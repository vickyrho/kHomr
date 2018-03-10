import { Component, OnInit, ElementRef } from '@angular/core';
import { MainService } from '../main.service';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [MainService],
  host: {
    '(document:click)': 'handleClick($event)',
  }
})
export class ProfileComponent implements OnInit {
  list : any ;
  modal: any ;
  techList: any;
  finalList: any ;
  elementRef : any ;
  clickedComponent: any;
  inside: any ;
  res:any ;
  branchList : any ;
  res1:any;


  constructor(public myElement : ElementRef,
              private mainService: MainService) {
    this.elementRef = myElement ;
  }

  ngOnInit() {
  this.assign();
    // TO CLOSE THE MODEL BY CLICKING OUTSIDE //
    $('#myModal').click(function(){
        console.log('clicked');
      this.modal = document.getElementById('myModal');
      this.modal.style.display = "none";
    });
  }

  // TO CHECK THE CLICK EVENT

  handleClick(event){
    this.clickedComponent = event.target;
    this.inside = false;
    do {
      if (this.clickedComponent === this.elementRef.nativeElement) {
        this.inside = true;
        //this.modal = document.getElementById('myModal');
      }
      this.clickedComponent = this.clickedComponent.parentNode;
    } while (this.clickedComponent);
    if(this.inside){
      console.log('inside');
      //if(this.modal.style.display === "block")

    }else{
      console.log('outside');
    }
  }

  // INITIALIZATION TO ASSIGN VALUES //

  assign(){
    this.mainService.getBranches().subscribe(
      response => {
        this.res = response ;
        console.log(response.data);
        this.branchList = this.res.data ;
      }
      );

    this.mainService.getUsers().subscribe(
      response => {
        this.res1 = response ;
        console.log(response.data);
        this.list = response.data;
      }
    );

  }

  // OPENS MODEL //

  openModel(id){
    this.modal = document.getElementById('myModal');
    this.modal.style.display = "block";
    console.log(id);
    // The K kore list which has dummy data temperorly . Data can be added from the back end //
      this.finalList = this.list[id-1] ;

  }

  // CLOSES MODEL //

  closeModel(){
    this.modal = document.getElementById('myModal');
    this.modal.style.display = "none";
  }





}
