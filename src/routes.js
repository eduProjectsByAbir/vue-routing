import ProductList from './ProductList.vue';
import Cart from './Cart.vue';
import ViewProduct from './ViewProduct.vue';

export const routes = [
    { path: '', component: ProductList },
    { path: '/cart', component: Cart },
    { path: '/products/:productId', name: 'ViewProduct', component: ViewProduct },
    { path: '*', component: { template: '<h1>Page not found!</h1>' } }
]