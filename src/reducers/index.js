import { combineReducers } from 'redux';
import EventsReducer from './EventsReducer';
import NewsReducer from './NewsReducer';
import DiningReducer from './DiningReducer';


export default combineReducers({
    events: EventsReducer,
    news: NewsReducer,
    dinning: DiningReducer
});
