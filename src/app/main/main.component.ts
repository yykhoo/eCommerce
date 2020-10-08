import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Product } from '../class/product';
import { PRODUCTS } from '../mock-products';
import { productAPIService } from '../services/productAPI.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  products: Product[];
  productslices: Product[];

  constructor(private productService: productAPIService) { 
    this.products = PRODUCTS;
    this.getProducts();
  }

    getProducts() {
      //this.productService.getProducts().subscribe( products => this.products = products);
      this.productService.getProducts().subscribe(
        data => {
            this.products = data;
            this.productslices = this.products.slice(0,4);
        }
      )
    }

  ngOnInit() {
  }

}
