import ProductList from './ProductList.vue';
import Cart from './Cart.vue';
import ViewProduct from './ViewProduct.vue';

export const routes = [
    { path: '/products/:productId/view', redirect: { name: 'viewProduct' } },
    // legacy
    { path: '', component: ProductList },
    { path: '/cart', component: Cart , alias: '/shopping-cart'},
    { path: '/products/:productId', props:true, name: 'viewProduct', component: ViewProduct },
    // 404 page
    { path: '*', component: { template: '<h1>Page not found!</h1>' } }
]