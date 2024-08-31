import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "home", loadChildren: () => import("./domain/home/home.module").then((m) => m.HomeModule) },
  { path: "nfts", loadChildren: () => import("./domain/nft/nft.module").then((m) => m.NftModule) },
  { path: "my-wallet", loadChildren: () => import("./domain/wallet/wallet.module").then((m) => m.WalletModule) },
  { path: "", redirectTo: "/home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
