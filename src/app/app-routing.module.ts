import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ReservationPageComponent } from './reservation-page/reservation-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'reservation', component: ReservationPageComponent},
  {path: 'contact', component: ContactPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',  
    anchorScrolling: 'enabled',             
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
