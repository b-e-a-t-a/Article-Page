var today = new Date();

var year = today.getFullYear();
var month = today.getMonth() + 1;


var day = today.getDate(); //25

window.onload = function() {
	//console.log('today: ' + today);
	console.log('todays day: ' + day);
}

var td = document.getElementsByTagName('td');

function markToday() {

	for ( var i = 0; i < td.length; i++) {

		var text = td[i].innerText;

		if (day == text) {
			//var span = document.createElement('span');
			td[i].innerHTML = day;
			//td[i].appendChild(span);
			//span.className += 'active';
			td[i].className += ' active';
		}
		else if (day > text) {
			if (td[i].classList.contains('past')) {

			} else {
				td[i].className += ' past';
			}
		}
	}
}

markToday();


function reserveDay() {

	var td = document.querySelectorAll("td");

	for ( var i = 0; i < td.length; i++) {
		
		td[i].addEventListener('click', function(e) {

			document.querySelector('.active').classList.toggle('active', false);
			

			var $target = e.target;
			console.log($target);

			if ($target.classList.contains('active')) {

                $target.classList.remove('active');

            } else if ($target.classList.contains('past') || $target.classList.contains('disabled')) {
            	alert('Incorrect date');
            	markToday();

            } else {
            	$target.classList.add('active');
            }

			var pickedDay = $target.innerHTML;

			console.clear();
			console.log('picked day: ' + pickedDay);

		});

	}
	
}

reserveDay();
