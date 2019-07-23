import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Product } from '../product';
import { PRODUCTS } from '../mock-products';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  products: Product[];
  productslices: Product[];

  constructor() { 
    this.products = PRODUCTS;
    this.productslices = this.products.slice(0,4);
  }

  ngOnInit() {
  }

}
