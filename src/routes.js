import home from './components/home.vue';
import contact from './components/contact.vue';
import products from './components/products.vue';
import productdetails from './components/productdetails.vue';
import pagenotfound from './components/pagenotfound.vue';


export const routes= [
{path:'',component:home},
{path:'/contact',component:contact},
{path:'/products',component:products},
{path:'/productdetails/:id',component:productdetails},
{path:'/pagenotfound',component:pagenotfound},
{path:'*',redirect:'/pagenotfound'}
];