import { Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { ExploreComponent } from './layout/explore/explore.component';
import { SignUpComponent } from './layout/sign-up/sign-up.component';
import { LoginComponent } from './layout/login/login.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { FezComponent } from './layout/fez/fez.component';
import { CasablancaComponent } from './layout/casablanca/casablanca.component';
import { RabatComponent } from './layout/rabat/rabat.component';
import { AgadirComponent } from './layout/agadir/agadir.component';
import { TangierComponent } from './layout/tangier/tangier.component';
import { MarrakechComponent } from './layout/marrakech/marrakech.component';
import { DiscoverComponent } from './layout/discover/discover.component';
import { ProductsComponent } from './layout/products/products.component';
import { ChatComponent } from './layout/chat/chat.component';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "/explore",
    pathMatch: "full",
  },
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "fez",
        component: FezComponent,
      },
      {
        path: ":city/:category/products",
        component: ProductsComponent,
      },
      {
        path: "discover",
        component: DiscoverComponent,
      },
      {
        path: "chat",
        component: ChatComponent,
      },
      {
        path: "casablanca",
        component: CasablancaComponent,
      },
      {
        path: "rabat",
        component: RabatComponent,
      },
      {
        path: "agadir",
        component: AgadirComponent,
      },
      {
        path: "tangier",
        component: TangierComponent,
      },
      {
        path: "marrakech",
        component: MarrakechComponent,
      },
    ],
  },
  {
    path: "signup",
    component: SignUpComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  { path: "**", component: NotFoundComponent },
];
