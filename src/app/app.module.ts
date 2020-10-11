import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { AccountComponent } from './account/account.component';
import { SupportComponent } from './support/support.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { CareerComponent } from './career/career.component';
import { HelpComponent } from './help/help.component';
import { PolicyComponent } from './policy/policy.component';
import { HowtobuyComponent } from './howtobuy/howtobuy.component';
import { ReturnRefundComponent } from './return-refund/return-refund.component';
import { ShopGuaranteeComponent } from './shop-guarantee/shop-guarantee.component';

import { HttpClientModule } from '@angular/common/http';
import { productAPIService } from './services/productAPI.service';
import { categoryAPIService } from './services/categoryAPI.service';
import { cartAPIService } from './services/cartItemAPI.service';
import { CategoryComponent } from './category/category.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AccountComponent,
    SupportComponent,
    ProductDetailComponent,
    ProductListingComponent,
    AboutusComponent,
    SigninComponent,
    SignupComponent,
    CareerComponent,
    HelpComponent,
    PolicyComponent,
    HowtobuyComponent,
    ReturnRefundComponent,
    ShopGuaranteeComponent,
    CategoryComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [productAPIService, categoryAPIService, cartAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
