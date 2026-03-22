import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Cart } from './pages/cart/cart';
import { ProductRegister } from './pages/product-register/product-register';
import { ProductEdit } from './pages/product-edit/product-edit';
import { ProductList } from './pages/product-list/product-list';
import { ProductDetails } from './pages/product-details/product-details';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: Home, title: 'Farmácia Online' },
    { path: 'cart', component: Cart, title: 'Carrinho' },
    { path: 'product/edit/:id', component: ProductEdit, title: 'Editar Produto' },
    { path: 'product/details/:id', component: ProductDetails, title: 'Detalhes Produto' },
    { path: 'product/new', component: ProductRegister, title: 'Cadastrar Produto' },
    { path: 'products', component: ProductList, title: 'Lista de Produtos' },
];

