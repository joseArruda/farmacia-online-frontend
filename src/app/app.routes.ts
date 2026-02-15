import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Cart } from './pages/cart/cart';
import { AboutUs } from './pages/about-us/about-us';
import { EditProduct } from './pages/edit-product/edit-product';
import { Edit } from './pages/edit/edit';

export const routes: Routes = [
    { path: 'home', component: Home },
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'cart', component: Cart },
    { path: 'aboutus', component: AboutUs },
    { path: 'edit/:id', component: Edit },
    { path: 'editproduct', component: EditProduct },
];

