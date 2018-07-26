var today = new Date();

var year = today.getFullYear();
var month = today.getMonth() + 1;


var day = today.getDate(); //25

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

			//console.clear();
			console.log('picked day: ' + pickedDay);

		});
	}	
}

reserveDay();

//form validation on click
function val() {
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	
	if (reg.test(form.email.value) == false) {

		alert('invalid email');
		form.email.focus();
		return false;
	}
	return true;
}

button.addEventListener('click', function(e) {
	return val();
});


//dropDown selection
var hotelsByCity = {
    Oslo: ["Grand Hotel", "Hilton Hotel"],
    Trondheim: ["Trondheim Hotel", "Resort Hotel"],
    Bergen: ["Bergen Hotel", "Yellow Hotel"]
}

function changeSelect(value) {
    document.getElementById("selectHotel").innerHTML = "<option></option>";
    
    var hotelOptions = "";

    for (categoryId in hotelsByCity[value]) {
        hotelOptions += "<option>" + hotelsByCity[value][categoryId] + "</option>";
    }
        document.getElementById("selectHotel").innerHTML = hotelOptions;
}