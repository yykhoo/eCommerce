import { Component, HostListener, OnInit } from '@angular/core';
import { Category } from '../class/category';
import { Product } from '../class/product';
import { PRODUCTS } from '../mock-products';
import { ProductService } from '../product.service';

import { categoryAPIService } from '../services/categoryAPI.service';
import { productAPIService } from '../services/productAPI.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {

  products: Product[];
  categories: Category[];
  
  searchText:string;
  showLeftContainer!:boolean;
  expandRightContainer!:boolean;
  constructor( private productService: productAPIService,
               private categoryService: categoryAPIService ) { 
    //this.products = PRODUCTS;
    this.showLeftContainer=true;
    this.expandRightContainer=false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if(window.innerWidth<1200){
      this.showLeftContainer=false;
      this.expandRightContainer=true;
    }else{
      this.showLeftContainer=true;
      this.expandRightContainer=false;
    }
  }

  ngOnInit() {
    this.getCategories();
    this.getProductsByCategoryId(1);
  }

  getProducts() {
    //this.productService.getProducts().subscribe( products => this.products = products);
    this.productService.getProducts().subscribe(
      data => {
          this.products = data;
      }
    )
  }

  getProductsByCategoryId(categoryId: number ) {
    this.productService.getProductbyCategoryId(categoryId).subscribe(
      data => {
          this.products = data;
      }
    )
  }
  
  
  getCategories() {
    this.categoryService.getcategories().subscribe(
      data => {
          this.categories = data;
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
