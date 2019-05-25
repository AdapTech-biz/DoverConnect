import axios from 'axios';
import convert from 'xml-js';

function populateArray(data) {
    return ({
        type: 'NEWS_ITEMS',
        payload: data
    });
}

export function fetchNews() {
    return (dispatch => {
        axios.get('https://www.dover.af.mil/DesktopModules/ArticleCS/RSS.ashx?ContentType=1&Site=67&max=30')
        .then(data => { 
            const result1 = convert.xml2json(data.data, { compact: true, spaces: 4 });
            const json = JSON.parse(result1);
            dispatch(populateArray(json.rss.channel.item));
        })
        .catch(error => { console.log(error); });
    });
}

