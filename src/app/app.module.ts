import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SigninComponent } from './authentification/signin/signin.component';
import { SignupComponent } from './authentification/signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { ShopListItemComponent } from './shop-list-item/shop-list-item.component';
import { AuthentificationService } from './service/authentification.service';
import { AuthentificationGuardService } from './service/authentification-guard.service';
import { ShopsService } from './service/shops.service';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule } from '@angular/router';
import { PreferredShopComponent } from './preferred-shop/preferred-shop.component';

const appRoutes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent},
  { path: 'shops', canActivate: [AuthentificationGuardService], component: ShopListComponent},
  { path:'shops/preferred', canActivate: [AuthentificationGuardService], component:PreferredShopComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HeaderComponent,
    ShopListComponent,
    ShopListItemComponent,
    PreferredShopComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthentificationService,
    AuthentificationGuardService,
    ShopsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
