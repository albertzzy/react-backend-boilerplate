export default {
    path: '/',
    component: require('./index.js').default,
    indexRoute:{
        component:require('./SignPage').default
    },
    childRoutes: [
        {
            path: 'home',
            getComponent(nextState, cb) {
                require.ensure([], (require) => {
                    cb(null, require('./IndexPage/components/Home.js').default)
                })
            },
            childRoutes:[
                {
                    path:'/home/subhome',
                    getComponents(nextState, cb) {
                        require.ensure([], (require) => {
                            cb(null, require('./IndexPage/components/Subhome.js').default)
                        })
                    }
                }

            ]
        }


    ]
};