import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchComponent} from './search.component';
import { GmapComponent } from './components/gmap/gmap.component';
import { RatesComponent } from './components/rates/rates.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { ServicesComponent } from './components/services/services.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { StarsComponent } from './components/stars/stars.component';
import { NoResultsComponent } from './no-results.component';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import { HotelFormComponent } from './components/hotel-form/hotel-form.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { SearchRoutingModule } from './search-routing.module';

@NgModule({
  declarations: [
      SearchComponent,
      GmapComponent,
      ServicesComponent,
      ImageGalleryComponent,
      ReservationsComponent,
      HotelFormComponent,
      ContactFormComponent,
      HotelListComponent,
      RatesComponent,
      StarsComponent,
      NoResultsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
