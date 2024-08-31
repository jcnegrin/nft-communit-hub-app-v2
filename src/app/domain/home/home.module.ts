import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './container/home.component';
import { NftCardComponent } from './presenters/nft-card/nft-card.component';


@NgModule({
  declarations: [
    HomeComponent,
    NftCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
