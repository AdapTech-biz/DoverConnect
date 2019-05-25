const INIT_STATE = { eventsArray: {}, minDate: '', maxDate: '', markedDates: {} };

export default function (state = INIT_STATE, action) {
    switch (action.type) {
        case 'EVENTS_ARRAY':
            return { 
                ...state, 
                eventsArray: action.payload.events,
                minDate: action.payload.minDate,
                maxDate: action.payload.maxDate,
                markedDates: action.payload.markedDates
                 };
        default:
             return state;
    }
}
