function convertMonthToNum(month) {
    switch (month) {
        case 'Jan':
            return '01';
        case 'Feb':
            return '02';
        case 'Mar':
            return '03';
        case 'Apr':
            return '04';
        case 'May':
            return '05';
        case 'Jun':
            return '06';
        case 'Jul':
            return '07';
        case 'Aug':
            return '08';
        case 'Sep':
            return '09';
        case 'Oct':
            return '10';
        case 'Nov':
            return '11';
        default:
            return '12';
    }
}

export function numToMonth(monthNum) {
    const month = [];
        month[0] = 'January';
        month[1] = 'February';
        month[2] = 'March';
        month[3] = 'April';
        month[4] = 'May';
        month[5] = 'June';
        month[6] = 'July';
        month[7] = 'August';
        month[8] = 'September';
        month[9] = 'October';
        month[10] = 'November';
        month[11] = 'December';
    return month[monthNum - 1];
}

export function dateParser(dateString) {
    const regEx = /(\d\d\s\w+\s\d\d\d\d)/g;
    const foundDate = dateString.match(regEx);
    const splitString = foundDate[0].split(' ');

    // console.log(splitString);
    return `${splitString[2]}-${convertMonthToNum(splitString[1])}-${splitString[0]}`;
}
