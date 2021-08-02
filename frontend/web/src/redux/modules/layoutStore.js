//액션 타입 정의
let drawerOpen={type: 'layout/drawerOpen'};
let drawerClose={type: 'layout/drawerClose'};

export const openDrawer = () =>({type:drawerOpen});
export const closeDrawer = () =>({type:drawerClose});

const initialState = {
    drawerOpen : false
};

export default function reducer(state = initialState, action){
    let copy = Object.assign({}, state);
    switch(action.type){
        case drawerOpen:
            copy.drawerOpen = !copy.drawerOpen;
            return copy;
        case drawerClose:
            copy.drawerOpen = false;
            return copy;
        default:
            return state;

    }
}