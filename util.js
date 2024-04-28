const Sunday = {
    getDate: function (week, month, year) {
        let timestamp = Date.parse(new Date(`KST ${year}-${month}-${1}`).toString());
        let date = new Date();
        let day = date.getDay();
        for (let i = 0; i < week; i++) {
            do {
                date = new Date(timestamp + 86400000);
                timestamp = Date.parse(date);
                if (date.getDay() == NaN) throw Error('');
            } while (date.getDay() != 0);
            if (date.getMonth() + 1 != month) throw new Error('Cannot reach');
        }
        return date;
    }
};
let now = new Date();
if (
    now.getDate() == Sunday.getDate(2, now.getMonth() + 1, now.getFullYear()).getDate() ||
    now.getDate() == Sunday.getDate(4, now.getMonth() + 1, now.getFullYear()).getDate()
) {
    // holiday
    console.log('HOLIDAY');
    document.body.style.background = '#FF9FAC';
} else {
    // not holiday
    console.log('NOT HOLIDAY');
    document.body.style.background = '#9FFFAC';
}