import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService} from '../product.service';
import { productAPIService } from '../services/productAPI.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: productAPIService,
    private location: Location
    ) {}

  ngOnInit() {
    this.getProduct();
  }

  getProduct(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    //his.productService.getProduct(id).subscribe(product=>this.product = product);
    this.productService.getProduct(id).subscribe(      
        data => {
          this.product = data;
      }
    )
  }

  goBack(): void {
    this.location.back();
  }

}
