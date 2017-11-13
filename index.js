// header
var header_btn = {
    index: '首页',
    about: '关于'
}
var header_tpl = `<div class="header_box">
    <div class="header_main">
        <ul>
            <li><a href="#index">${header_btn.index}</a></li>
            <li><a href="#about">${header_btn.about}</a></li>
        </ul>
    </div>
    </div>`;

Vue.component('appHeader',{
    template: header_tpl,
    data: function(){
        return {
            
        }
    }
});
//left up bar
var left_up_btn = {
    title: '甫夸',
    index: '首页',
    categories: '分类',
    tags: '标签',
    archives: '归档'
}
var left_up_tpl = `<div class="left_up_box">
    <ul>
        <li class="left_title"><a href="">${left_up_btn.title}</a></li>
        <li class="left_up_btn"><a href="">${left_up_btn.index}</a></li>
        <li class="left_up_btn"><a href="">${left_up_btn.categories}</a></li>
        <li class="left_up_btn"><a href="">${left_up_btn.tags}</a></li>
        <li class="left_up_btn"><a href="">${left_up_btn.archives}</a></li>
    </ul>
    </div>`;
//left down bar 
var left_down_tpl = `<div class="left_down_box">
    </div>`;
//left
var left_tpl = `<section class="left_box">${left_up_tpl}
    </section>`;
//right
var right_tpl = `<section class="right_box">
    </section>`;
//main
var main_tpl = `<main class="main_box">${left_tpl}${right_tpl}
</main>`;


//main
var main = Vue.extend({
    template: main_tpl,
    data: function() {
        return {
            msg: 'Hello, index!'
        }
    }
})

var about = Vue.extend({
    template: '<div v-html="msg"></div>',
    data: function() {
        return {
            msg: marked('# hello world')
        }
    }
})

const routes = [
    {
        path: '/index',
        component: main
    },
    {
        path: '/about',
        component: about
    }
]

const router = new VueRouter({
    routes: routes
});

const app = new Vue({
    router
}).$mount('#app');