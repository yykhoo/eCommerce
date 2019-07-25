import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { PRODUCTS } from '../mock-products';


@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {

  products: Product[];
  searchText:string;
  constructor() { 
    this.products = PRODUCTS;
  }

  ngOnInit() {
  }

  changeSearch(){
    alert("changeSearch");
    alert(this.searchText);
      var results=new Array<Product>();
      for(let product of this.products){
        if(product.description.includes(this.searchText)){
          results.push(product);

        }
        this.products=results;
      }
      
  }

}
