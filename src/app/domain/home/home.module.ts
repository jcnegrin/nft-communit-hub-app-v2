import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './container/home.component';
import { NftCardComponent } from './presenters/nft-card/nft-card.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { PriceTableComponent } from './presenters/price-table/price-table.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    HomeComponent,
    NftCardComponent,
    PriceTableComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardModule,
    ButtonModule,
    TableModule
  ]
})
export class HomeModule { }
