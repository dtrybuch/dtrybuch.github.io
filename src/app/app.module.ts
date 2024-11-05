import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MenuComponent } from './menu/menu.component';
import { SliderComponent } from './slider/slider.component';
import { SmallSliderComponent } from './small-slider/small-slider.component';
import { RightSideImageComponent } from './right-side-image/right-side-image.component';
import { LeftSideImageComponent } from './left-side-image/left-side-image.component';
import { ReservationPageComponent } from './reservation-page/reservation-page.component';
import {AsyncPipe, JsonPipe} from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE, MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import {provideAnimations} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon'
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MenuComponent,
    SliderComponent,
    SmallSliderComponent,
    RightSideImageComponent,
    LeftSideImageComponent,
    ReservationPageComponent,
    ContactPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JsonPipe, 
    MatDatepickerModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatRippleModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    GalleryModule,
    LightboxModule,
    AsyncPipe,
    MatCheckboxModule
  ],
  providers: [provideAnimations(), MatDatepickerModule, {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},],
  bootstrap: [AppComponent]
})
export class AppModule { }
