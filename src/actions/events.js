import axios from 'axios';
import convert from 'xml-js';
import {dateParser} from '../helperFunctions';


export function populateEventsArray(data) {

    const events = {};
    const markedDates = {};
    data.forEach(element => {
        // console.log(dateParser(element.ekdate._text));
        const dateString = dateParser(element.ekdate._text);
        events[dateString] = 
              [{ eventTitle: element.title._text.split(' -- ')[1],
                eventDescription: element.description._cdata }];

        markedDates[dateString] = { marked: true };
      });

      const dates = Object.keys(events);
    return ({
        type: 'EVENTS_ARRAY',
        payload: { events, minDate: dates[0], maxDate: dates[dates.length - 1], markedDates }
    });
}

export function fetchEvents() {
    return (dispatch => {
        axios.get('http://www.eventkeeper.com/ekfeed/DAFBS_1.xml')
        .then(data => { 
            const result1 = convert.xml2json(data.data, { compact: true, spaces: 4 });
            const json = JSON.parse(result1);
            dispatch(populateEventsArray(json.rss.channel.item));
        })
        .catch(error => { console.log(error); });
    });
}
