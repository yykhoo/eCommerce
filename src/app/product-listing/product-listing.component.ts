import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { PRODUCTS } from '../mock-products';
import { ProductService } from '../product.service';

import { productAPIService } from '../services/productAPI.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {

  products: Product[];
  searchText:string;
  constructor( private productService: productAPIService) { 
    //this.products = PRODUCTS;
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    //this.productService.getProducts().subscribe( products => this.products = products);
    this.productService.getProducts().subscribe(
      data => {
          this.products = data;
      }
    )
  }

  // changeSearch(){
  //   alert("changeSearch");
  //   alert(this.searchText);
  //     var results=new Array<Product>();
  //     for(let product of this.products){
  //       if(product.description.includes(this.searchText)){
  //         results.push(product);

  //       }
  //       this.products=results;
  //     }
      
  // }

}
