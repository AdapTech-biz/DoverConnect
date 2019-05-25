import { combineReducers } from 'redux';
import EventsReducer from './EventsReducer';
import NewsReducer from './NewsReducer';


export default combineReducers({
    events: EventsReducer,
    news: NewsReducer
});
