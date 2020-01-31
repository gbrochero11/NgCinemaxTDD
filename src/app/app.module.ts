import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarSocialComponent } from './landing-page/navbar-social/navbar-social.component';
import { NavbarMenuComponent } from './landing-page/navbar-menu/navbar-menu.component';
import { MoviesFilterComponent } from './landing-page/movies-filter/movies-filter.component';
import { SlidesComponent } from './landing-page/slides/slides.component';
import { WeekBillboardComponent } from './landing-page/week-billboard/week-billboard.component';
import { PremieresComponent } from './landing-page/premieres/premieres.component';
import { CarouselComponent } from './landing-page/carousel/carousel.component';
import { FooterComponent } from './landing-page/footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarSocialComponent,
    NavbarMenuComponent,
    MoviesFilterComponent,
    SlidesComponent,
    WeekBillboardComponent,
    PremieresComponent,
    CarouselComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
