export default {
    path: '/',
    component: require('./IndexPage/index.js').default,
    indexRoute:{
        component:require('./IndexPage/nav11.js').default
    },
    childRoutes: [
        {
            path:'sign',
            getComponent(nextState, cb) {
                require.ensure([], (require) => {
                    cb(null, require('./SignPage').default)
                })
            }

           /*  path: 'home',
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

            ] */
        },
        {
            path:'nav12',
            getComponent(nextState, cb) {
                require.ensure([], (require) => {
                    cb(null, require('./IndexPage/nav12.js').default)
                })
            }

        },
        {
            path:'nav13',
            getComponent(nextState, cb) {
                require.ensure([], (require) => {
                    cb(null, require('./IndexPage/nav13.js').default)
                })
            }

        }


    ]
};