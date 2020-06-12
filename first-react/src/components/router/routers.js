
export default {

    routes: [{
        path: '/',
        component: '../views',
        routes: [
            {
                path: '/',
                component: 'index',
            },
            {
                path: '/tea',
                component:  '../views/teachers'
            },
            {
                path: '/sub',
                routes: [
                    { path: '/sub/oam', component: 'Dashboard/Analysis' },
                    { path: '/sub/max', component: 'Dashboard/Monitor' },
                    { path: '/sub/cc', component: 'Dashboard/Workplace' }
                ]
            },
        ]
    }],
};