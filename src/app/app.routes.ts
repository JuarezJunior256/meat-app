import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ReviewComponent } from './restaurant-detail/review/review.component';
import { OrderSumaryComponent } from './order-sumary/order-sumary.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const ROUTES: Routes = [

    {path: ''     ,        component: HomeComponent},
  
    //rotas com parametros
    {path: 'restaurants/:id', component: RestaurantDetailComponent,
      children:[//rotas filhas
           //configurar qual será a primeira rota filha, quando acessado o component 
           {path: '', redirectTo: 'menu', pathMatch:'full'},
           {path: 'menu',    component: MenuComponent},
           {path: 'reviews', component: ReviewComponent }
        ]},
    {path: 'restaurants', component: RestaurantsComponent},
    {path: 'order', loadChildren: './order/order.module#OrderModule'},
    {path: 'order-summary', component: OrderSumaryComponent},
    {path: 'about',        loadChildren: './about/about.module#AboutModule'},
    {path: '**',  component: NotFoundComponent}

]