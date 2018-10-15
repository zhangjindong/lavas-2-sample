import Vue from 'vue';
import Router from 'vue-router';

    
import _9d49a922ebc8a6d77ca82c0a74289b98 from '@/pages/Appshell.vue';
    

    
import _f7fc7554d202a317883db2ae067316d3 from '@/pages/detail/_id.vue';
    

    
import _d2462dcf0c7beccd286c658e08187914 from '@/pages/Error.vue';
    

    
import _67830448037326425509e44bce7632b7 from '@/pages/Index.vue';
    

    
import _9b4643675ed784cb144d096f551d1b3a from '@/pages/liangsheng/_id.vue';
    

    
import _972a3ffe9fa34d21e284a082b86e7551 from '@/pages/meirenxinji/_id.vue';
    

    
import _cdaafa4135f12e6f9cbb7902cf679748 from '@/pages/Meirenxinjiall.vue';
    

    
import _f6e4c726bdebcd398e797a5c9bd00240 from '@/pages/yanxigonglue/_id.vue';
    

    
import _cfc345edf2ae01f9ff1f662ffd069c09 from '@/pages/Yanxigonglueall.vue';
    


let routes = [
    {
        "path": "/appshell",
        "component": _9d49a922ebc8a6d77ca82c0a74289b98,
        "meta": {},
        "name": "appshell"
    },
    {
        "path": "/detail/:id",
        "component": _f7fc7554d202a317883db2ae067316d3,
        "meta": {},
        "name": "detailId"
    },
    {
        "path": "/",
        "component": _67830448037326425509e44bce7632b7,
        "meta": {},
        "name": "index"
    },
    {
        "path": "/liangsheng/:id",
        "component": _9b4643675ed784cb144d096f551d1b3a,
        "meta": {},
        "name": "liangshengId"
    },
    {
        "path": "/meirenxinji/:id",
        "component": _972a3ffe9fa34d21e284a082b86e7551,
        "meta": {},
        "name": "meirenxinjiId"
    },
    {
        "path": "/meirenxinjiall",
        "component": _cdaafa4135f12e6f9cbb7902cf679748,
        "meta": {},
        "name": "meirenxinjiall"
    },
    {
        "path": "/yanxigonglue/:id",
        "component": _f6e4c726bdebcd398e797a5c9bd00240,
        "meta": {},
        "name": "yanxigonglueId"
    },
    {
        "path": "/yanxigonglueall",
        "component": _cfc345edf2ae01f9ff1f662ffd069c09,
        "meta": {},
        "name": "yanxigonglueall"
    },
    {
        "path": "/error",
        "component": _d2462dcf0c7beccd286c658e08187914,
        "meta": {},
        "name": "error",
        "alias": "*"
    }
];

Vue.use(Router);




const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
        return savedPosition;
    } else {
        const position = {};
        // scroll to anchor by returning the selector
        if (to.hash) {
            position.selector = to.hash;
        }
        // check if any matched route config has meta that requires scrolling to top
        if (to.matched.some(m => m.meta.scrollToTop)) {
            // cords will be used if no selector is provided,
            // or if the selector didn't match any element.
            position.x = 0
            position.y = 0
        }
        // if the returned position is falsy or an empty object,
        // will retain current scroll position.
        return position;
    }
};



export const keepAlivePages = routes.filter(route => route.keepAlive || route.meta.keepAlive)
                            .map(route => route.name);

export function createRouter() {
    let router = new Router({
        mode: 'history',
        base: '/',
        scrollBehavior,
        routes
    });



    

    router.beforeEach((to, from, next) => {
        if (router.app.$store) {
            if (router.app.$store.state.pageTransition.enable) {
                
                let effect = 'fade';
                
                router.app.$store.commit('pageTransition/setType', 'fade');
                router.app.$store.commit('pageTransition/setEffect', effect);
            }
        }
        next();
    });


    return router;
}
