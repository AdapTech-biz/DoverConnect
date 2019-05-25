const INIT_STATE = { newsArray: [] };

export default function (state = INIT_STATE, action) {
    switch (action.type) {
        case 'NEWS_ITEMS':
            return { ...state, newsArray: action.payload };
        default:
             return state;
    }
}
