import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Cart } from './pages/cart/cart';
import { EditProduct } from './pages/edit-product/edit-product';
import { Edit } from './pages/edit/edit';
import { Product } from './pages/product/product';

export const routes: Routes = [
    { path: 'home', component: Home },
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'cart', component: Cart },
    { path: 'edit/:id', component: Edit },
    { path: 'editproduct', component: EditProduct },
    { path: 'details/:id', component: Product },
];

