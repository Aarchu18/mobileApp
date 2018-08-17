import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  constructor() { }
  category: string = "fruites";
  getCategory() {
    return this.category;
  }

  setCategory(category) {
    this.category = category;
    console.log("set", this.category);

  }
}


