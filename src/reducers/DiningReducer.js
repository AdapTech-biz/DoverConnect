const INIT_STATE = { menuToDisplay: [], showModal: false };

export default function (state = INIT_STATE, action) {
    switch (action.type) {
        case 'MENU_LIST':
            return { 
                ...state, 
                menuToDisplay: action.payload,
                showModal: true
                 };
        case 'CLOSE_MODAL':
                 return { ...INIT_STATE };
        default:
             return state;
    }
}
