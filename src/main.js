import Vue from 'vue'
import App from './App.vue'
import demo from './components/demo.vue';
import sidebarComponent from './components/sidebar.vue';
import productComponent from './components/products.vue';
import todoComponent from './components/todo.vue';
import viewresource from 'vue-resource';
import vuerouter from 'vue-router';
import { routes } from './routes';

Vue.use(viewresource);
Vue.use(vuerouter);

Vue.component('app-demo',demo);
Vue.component('app-products',productComponent);
Vue.component('app-sidebar',sidebarComponent);
Vue.component('app-todo',todoComponent);

Vue.directive('hightlight',{
bind(el,binding,vnode){
    el.style.backgroundColor='red';

}
});

Vue.directive('hightlight_1',{
  bind(el,binding,vnode){
      if(binding.arg=='background'){
        el.style.backgroundColor=binding.value;
      }
      else
      {
        el.style.color = binding.value;
      }
  
  }
  });

const router=new vuerouter({
  routes,
  mode:'history'
});


new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})
