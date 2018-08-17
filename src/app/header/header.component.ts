import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from '../cart-service.service';
import {data} from '../data';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private routes: Router,private cartService:CartServiceService) { }
  cArray=[];
  onClick(){
    console.log(data.length);
    data.forEach((item)=>{
      this.cArray.push(item.category);
    })
  console.log(this.cArray);
  }

  setCategory(category){
    this.routes.navigate(['detail'])
    this.cartService.setCategory(category);
  }


  openNav() {
    document.getElementById("mySidenav").style.width = "45%";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  click() {
    this.routes.navigate(['/detail']);
  }

  ngOnInit() {
    this.onClick();
    
  }


}
