export default {
    path: '/',
    component: require('./index.js').default,
    onEnter: (nextState, replace) => {
        console.log('=======');
        console.log('login judge');
        console.log('=======');
        // replace(`/sign`)
    },
    childRoutes: [
        {
            path: 'user',
            component: require('./IndexPage/index.js').default,
            indexRoute:{
                component:require('./IndexPage/nav11.js').default
            },
            childRoutes:[
                {
                    path:'/user/nav12',
                    getComponent(nextState, cb) {
                        require.ensure([], (require) => {
                            cb(null, require('./IndexPage/nav12.js').default)
                        })
                    }
        
                },
                {
                    path:'/user/nav13',
                    getComponent(nextState, cb) {
                        require.ensure([], (require) => {
                            cb(null, require('./IndexPage/nav13.js').default)
                        })
                    }
        
                }
            ]

        },
        {
            path:'sign',
            getComponent(nextState, cb) {
                require.ensure([], (require) => {
                    cb(null, require('./SignPage').default)
                })
            }
        }
        


    ]
};