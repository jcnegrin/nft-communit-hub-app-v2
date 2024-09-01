import { Component, Input } from '@angular/core';
import { Nft } from '../../../../shared/model/Nft';

@Component({
  selector: 'app-price-table',
  templateUrl: './price-table.component.html',
  styleUrl: './price-table.component.css'
})
export class PriceTableComponent {

  @Input()
  symbols!: Nft[];

  totalSolPrice: number = 0;
  totalCurrencyPrice: number = 0;

}
