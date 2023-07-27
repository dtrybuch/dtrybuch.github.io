import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MenuComponent } from './menu/menu.component';
import { SliderComponent } from './slider/slider.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SmallSliderComponent } from './small-slider/small-slider.component';
import { RightSideImageComponent } from './right-side-image/right-side-image.component';
import { LeftSideImageComponent } from './left-side-image/left-side-image.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MenuComponent,
    SliderComponent,
    AboutUsComponent,
    SmallSliderComponent,
    RightSideImageComponent,
    LeftSideImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
