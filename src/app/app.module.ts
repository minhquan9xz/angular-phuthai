import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/Footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { ListProductComponent } from './component/list-product/list-product.component';
import { NewsComponent } from './component/news/news.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListProductComponent,
    NewsComponent,
    FooterComponent,
    ProductDetailComponent,
    HomeComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
