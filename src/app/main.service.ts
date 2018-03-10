import { Injectable } from '@angular/core';
import { GalleryComponent } from './gallery/gallery.component';
import { Observable } from 'rxjs/Observable';
import { of} from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class MainService {

  constructor(private http:HttpClient) { }

  getImages(): Observable<any>{
    return this.http.get("https://api.myjson.com/bins/7r3tp").map((response)=>{
        return response;
      })
  }

  getBranches(): Observable<any> {
    return this.http.get("https://api.myjson.com/bins/gzbp9").map((response)=>{
      return response;
    })
  }

  getUsers():Observable<any>{
    return this.http.get("https://api.myjson.com/bins/fdo31").map((response)=> {
      return response ;
    });
  }

}
