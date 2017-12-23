import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class AlbumService {
  constructor(private http: HttpClient){
  }
  getimages(start, limit){
    const url = 'https://jsonplaceholder.typicode.com/photos?_start='+start +'&limit='+limit;
    return this.http.get(url);
  
  }

}
