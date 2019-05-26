import { NEWS_ITEMS } from '../actions/ActionTypes';

const INIT_STATE = { newsArray: [], displayModal: false, articleURL: '' };

export default function (state = INIT_STATE, action) {
    switch (action.type) {
        case NEWS_ITEMS:
            return { ...state, newsArray: action.payload };
        default:
             return state;
    }
}
