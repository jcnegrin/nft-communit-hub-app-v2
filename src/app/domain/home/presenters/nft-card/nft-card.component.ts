import { Component, Input } from '@angular/core';
import { Nft } from '../../../../shared/model/Nft';

@Component({
  selector: 'app-nft-card',
  templateUrl: './nft-card.component.html',
  styleUrl: './nft-card.component.css'
})
export class NftCardComponent {

  @Input() symbol!: Nft;

}
