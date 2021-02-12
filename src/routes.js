import ProductList from './ProductList.vue';
import Cart from './Cart.vue';
import ViewProduct from './ViewProduct.vue';
import Product from './Product.vue';
import ProductReviews from './ProductReviews.vue';
import SpecialOffer from './SpecialOffer.vue';

export const routes = [
    // legacy
    { path: '', components: {
        default: ProductList,
        discount: SpecialOffer
    } },
    // nested routes
    { path: '/products/:productId',name: 'product', props:true, component: Product, children: [
        {path: 'details', name: 'viewProduct', props: true, component: ViewProduct },
        {path: 'reviews', name: 'productReviews', props: true, component: ProductReviews }
    ] },
    { path: '/cart', component: Cart , alias: '/shopping-cart'},
    // 404 pageprops:true,
    { path: '*', component: { template: '<h1>Page not found!</h1>' } }
]