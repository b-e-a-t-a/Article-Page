var today = new Date();

var year = today.getFullYear();
var month = today.getMonth() + 1;

console.log(month);

var day = today.getDate(); //25

window.onload = function() {
	console.log('todays day: ' + day);
}

var li = document.getElementsByTagName('li');

function markToday() {

	for ( var i = 0; i < li.length; i++) {

		var text = li[i].innerText;

		if (day == text) {
			var span = document.createElement('span');
			li[i].innerHTML = '';
			span.innerHTML = day;
			li[i].appendChild(span);
			span.className += 'active';
			li[i].className += 'present';
		}
		else if (day > text) {
			li[i].className += 'past';
		}
	}
}

markToday();

function reserveDay() {

	var li = document.querySelectorAll("li");

	for ( var i = 0; i < li.length; i++) {
		

		li[i].addEventListener('click', function(e) {
			var $target = e.target;
			console.log($target);
			if ($target.classList.contains('present')) {

                $target.classList.remove('present');
            }

			var pickedDay = $target.innerHTML;
			var span = document.createElement('span');
			$target.appendChild(span);
			span.classList.add('active');
			span.innerHTML = pickedDay;
			$target.classList.toggle('present');
			
			
			
		});

	}

	

	
	
}

reserveDay();



//var pickedDay = document.getElementsByTagName('li').innerHTML = day;

/*
function test() {
	var disabled = document.getElementsByClassName('disabled');


	var dodane = document.getElementsByTagName('ul');

	dodane[0].className += ' hello';

	console.log(disabled);
	console.log(dodane[0].className);
	

	var active = document.getElementsByClassName('active');
	var text = active[0].innerHTML;

	console.log('zaznaczona: ' + text);

}

test();
*/

/*
window.addEventListener('load', function () {
	calendar.init({
		disablePastDays: true
	});
});


}

*/