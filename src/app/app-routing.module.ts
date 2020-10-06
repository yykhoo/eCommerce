import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SupportComponent } from './support/support.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AboutusComponent} from './aboutus/aboutus.component';
import { PolicyComponent } from './policy/policy.component';
import { CareerComponent } from './career/career.component';
import { HelpComponent} from './help/help.component';
import { ReturnRefundComponent} from './return-refund/return-refund.component';
import { ShopGuaranteeComponent} from './shop-guarantee/shop-guarantee.component';
import { HowtobuyComponent} from './howtobuy/howtobuy.component';

const routes: Routes = [
  
  { 
    path: '', 
    redirectTo: '/home/main', 
    pathMatch: 'full' 
  },  
  { 
      path: 'home', 
      component: HomeComponent,
      children:[
        {
          path: 'main', 
          component: MainComponent
        },{
          path: 'support', 
          component: SupportComponent
        },{
          path: 'product-listing', 
          component: ProductListingComponent
        },
        { 
          path: 'product-detail/:id', 
          component: ProductDetailComponent 
        },
        { 
          path: 'signup', 
          component: SignupComponent 
        },{ 
          path: 'signin', 
          component: SigninComponent },  
        { 
          path: 'aboutus', 
          component: AboutusComponent 
        },{ 
          path: 'policy', 
          component: PolicyComponent
        },{ 
          path: 'career', 
          component: CareerComponent
        },{ 
          path: 'help', 
          component: HelpComponent
        },{ 
          path: 'howtobuy', 
          component: HowtobuyComponent
        },{ 
          path: 'shop-guarantee', 
          component: ShopGuaranteeComponent
        },{ 
          path: 'return-nrefund', 
          component: ReturnRefundComponent
        }
      ] 
  }
  
  // { path: 'main', component: MainComponent },
  // { path: 'header', component: HeaderComponent },
  // { path: 'footer', component: FooterComponent },
  // { path: 'support', component: SupportComponent },
  // { path: 'product-detail', component: ProductDetailComponent },
  // { path: 'signup', component: SignupComponent },  
  // { path: 'signin', component: SigninComponent },  
  // { path: 'aboutus', component: AboutusComponent },
  // { path: 'policy', component: PolicyComponent},
  // { path: 'career', component: CareerComponent},
  // { path: 'help', component: HelpComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
