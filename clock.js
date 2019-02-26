function showDate(){
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	var day = date.getDate();
	var month = date.getMonth();
	var year = date.getFullYear();
	switch(month){
		case 0:
			month = 'January';
			break;
		case 1:
			month = 'February';
			break;
		case 2:
			month = 'March';
			break;
		case 3:
			month = 'April';
			break;
		case 4:
			month = 'May';
			break;
		case 5:
			month = 'June';
			break;
		case 6:
			month = 'July';
			break;
		case 7:
			month = 'August';
			break;
		case 8:
			month = 'September';
			break;
		case 9:
			month = 'October';
			break;
		case 10:
			month = 'November';
			break;
		case 11:
			month = 'December';
			break;
		default:
			null;
	};
	if (minutes < 10){
		minutes = '0' + minutes;
	}
	if (seconds < 10){
		seconds = '0' + seconds;
	}
	var theDate = month + ' ' + day + ', ' + year;
	var clock = hours + ':' + minutes + ':' + seconds;
	document.getElementById('date').innerHTML = theDate;
	document.getElementById('time').innerHTML = clock; 
	setTimeout(showDate, 500)
}