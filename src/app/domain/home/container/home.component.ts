import { Component } from "@angular/core";
import { Nft } from "../../../shared/model/Nft";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  nfts: Nft[] = [
    {
      id: "tomorrowland_winter",
      name: "A Letter from the Universe",
      description:
        "The first-ever Tomorrowland NFT drop, and the first piece of the Medallion of Memoria. Originally discovered in the French Alps, and now available to all.",
      price: 0,
      curency: "EUR",
      currentCurrencyPrice: 0,
      partOfMedallion: true,
    },
    {
      id: "the_reflection_of_love",
      name: "The Reflection of Love",
      description:
        "The second piece of the Medallion of Memoria captures the essence of the biggest Tomorrowland Belgium ever. Dropping on day one of the festival: July 15, 2022 on Magic Eden's Launchpad.",
      price: 0,
      curency: "EUR",
      currentCurrencyPrice: 0,
      partOfMedallion: true,
    },
    {
      id: "tomorrowland_love_unity",
      name: "The Symbol of Love and Unity",
      description:
        "The Symbol of Love & Unity is the last part of a series of three collections. Own one NFT from each of these three collections to assemble the Medallion of Memoria the ultimate Tomorrowland fan experience.",
      price: 0,
      curency: "EUR",
      currentCurrencyPrice: 0,
      partOfMedallion: true,
    },
    {
      id: "the_golden_auric",
      name: "The Golden Auric",
      price: 0,
      curency: "EUR",
      currentCurrencyPrice: 0,
      partOfMedallion: false,
    }
  ];
}
