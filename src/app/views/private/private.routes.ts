import {Routes} from "@angular/router";

export const privateRoutes: Routes = [
    {
        path: 'restaurants',
        loadChildren: () => import('./restaurants/restaurants.module').then(m => m.RestaurantsModule)
    },
    {
        path: 'menus',
        loadChildren: () => import('src/app/views/private/menu/menu-views.module').then(m => m.MenuViewsModule)
    },
    {
        path: 'reservations',
        loadChildren: () => import('./reservations/reservations.module').then(m => m.ReservationsModule)
    },
    {
        path: '',
        redirectTo: 'restaurants',
        pathMatch: 'full',
    }
];
