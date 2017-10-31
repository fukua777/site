
Vue.component('my-com',{
    template: '#header'
});

var Home = Vue.extend({
    template: '<div><h1>Home</h1><p>{{msg}}</p><my-com></my-com></div>',
    data: function() {
        return {
            msg: 'Hello, index!'
        }
    }
})

var about = Vue.extend({
    template: '<span>{{msg}}</span>',
    data: function() {
        return {
            msg: 'hello about!'
        }
    }
})

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/index/about',
        component: about
    }
]

const router = new VueRouter({
    routes: routes
});

const app = new Vue({
    router
}).$mount('#app');