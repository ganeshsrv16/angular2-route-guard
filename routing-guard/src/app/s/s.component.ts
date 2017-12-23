import { Component, OnInit } from '@angular/core';
import {AlbumService} from '../album.service';
@Component({
  selector: 'app-s',
  templateUrl: './s.component.html',
  styleUrls: ['./s.component.css']
})
export class SComponent implements OnInit {

  start: number;
  limit: number;
  constructor(private imageservice: AlbumService) {
    this.start = 0;
    this.limit = 10;
   }
  ngOnInit() {
    this.imageservice.getimages(this.start, this.limit).subscribe(response => {
      console.log(response);
    });
  }

}
