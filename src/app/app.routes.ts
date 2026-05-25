import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';
import { Cart } from './pages/cart/cart';
import { Login } from './pages/login/login';
import { ProductDetails } from './pages/product-details/product-details';
import { Register } from './pages/register/register';


export const routes: Routes = [
    {
        path : '', component: Home
    },
    {
        path: 'products', component: Products
    },
    {
        path: 'cart', component: Cart
    },
    {
        path:'login', component: Login
    },
    {
        path: 'products/:id', component: ProductDetails
    },
    {
        path: 'cart', component: Cart
    },
    {
        path: 'login', component: Login
    },

    {
        path: 'register', component: Register
    }
];
