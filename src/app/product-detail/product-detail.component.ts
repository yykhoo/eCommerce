import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    ) { 
  }

  ngOnInit() {
    this.route.paramMap.subscribe( params => { this.product = Product[+params.get('id')]});

    // window.alert("ID: " + this.product);
  }


}
