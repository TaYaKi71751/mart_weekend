const dateInput = document.querySelector('input.input-date');
const dateOnChange =	(event) => {
//	console.log(event.target.value);
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
let now = new Date(`${event.target.value}`);
const result = document.querySelector('div.result-text')
if (
	now.getDate() == Sunday.getDate(2, now.getMonth() + 1, now.getFullYear()).getDate() ||
	now.getDate() == Sunday.getDate(4, now.getMonth() + 1, now.getFullYear()).getDate()
) {
	// holiday
	console.log('TODAY IS HOLIDAY WEEKEND');
	document.body.style.background = '#FF9FAC';
	result.innerHTML = 'IS HOLIDAY';
} else {
	// not holiday
	console.log('TODAY IS NOT HOLIDAY WEEKEND');
	document.body.style.background = '#9FFFAC';
	result.innerHTML = 'IS NOT HOLIDAY';
}
};
dateInput.addEventListener('change',dateOnChange);
const __now__ = new Date();
dateInput.value = (
 `${__now__.getFullYear()}-` +
 `${(__now__.getMonth() + 1).toString().length == 1 ? '0' : ''}${__now__.getMonth() + 1}-` +
 `${__now__.getDate().toString().length == 1 ? '0' : ''}${__now__.getDate()}`
);
dateOnChange({target:dateInput});
