import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DetailComponent } from './detail/detail.component';
import {CartServiceService} from './cart-service.service';
import { FooterComponent } from './footer/footer.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {
    path: '',
    component: DetailComponent
  },

  {
    path: 'detail',
    component: DetailComponent
  },

  {
    path: 'checkout',
    component: CheckoutComponent
  },


];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DetailComponent,
    FooterComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    
    RouterModule.forRoot(routes),
  ],
  providers: [CartServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
