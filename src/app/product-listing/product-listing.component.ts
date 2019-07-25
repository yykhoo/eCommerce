import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { PRODUCTS } from '../mock-products';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {

  products: Product[];
  searchText:string;
  constructor( private productService: ProductService) { 
    //this.products = PRODUCTS;
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void{
    this.productService.getProducts().subscribe( products => this.products = products);
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
