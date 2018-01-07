const initialState = {list:[]};


export default function(state = initialState, action){
    switch(action.type){
        case 'SAVE_LIST':
            // return Object.assign({},state,{list:action.payload})
            return {...state,...{list:action.payload}}

        default:
            return state;
    }

}
