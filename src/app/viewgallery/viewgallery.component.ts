import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewgallery',
  templateUrl: './viewgallery.component.html',
  styleUrls: ['./viewgallery.component.css']
})
export class ViewgalleryComponent implements OnInit {

  constructor(private api:ApiService) {
    api.func().subscribe(
      (response)=>{
        this.data=response
      }
    )
   }

  ngOnInit(): void {
  }
data:any=[
  
]
}
