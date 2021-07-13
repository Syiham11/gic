//IMPORT SECTION
import Vue from 'vue'
import Router from 'vue-router'
import Kontak from './pages/kontak/Index.vue'
import Create from './pages/kontak/Add.vue'
import Edit from './pages/kontak/Edit.vue'

Vue.use(Router)

//DEFINE ROUTE
const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'kontak',
            component: Kontak,
        },
        {
            path: '/create',
            name: 'create',
            component: Create,
        },
        {
            path: '/edit/:id',
            name: 'edit',
            component: Edit
        },
       
    ]
});



export default router
