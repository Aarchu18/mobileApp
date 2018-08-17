import { Component, OnInit } from '@angular/core';
import {data} from '../data';
import {Router} from '@angular/router';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private cartService:CartServiceService,private routes:Router) { }

  category:string;
  itemList=[];
  counter=0;

  onClick(){
    this.category=this.cartService.getCategory();
    // console.log("category",this.category);
    data.forEach(data => {
      console.log(data);
      if(data.category==this.category){
        console.log(data.category);
        this.itemList=data.itemList;
      }
    });
    
  }
  oncount(){
 this.counter++;

  }
  checkout(){
    this.routes.navigate(['checkout']);
  }
  
  


  ngOnInit() {
  

  }
}
