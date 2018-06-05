	function getInfo(){
		var age_digit = document.getElementById("age_digit").value;
		var time_unit = document.getElementById("time_unit").value;
		;
		if (time_unit == "seconds"){
			age_digit = age_digit/60/60/24/365;
		}
		else if (time_unit == "minutes"){
			age_digit = age_digit/60/24/365;
		}
		else if (time_unit == "hours"){
			age_digit = age_digit/24/365;
		}
		 else if (time_unit == "days"){
			age_digit = age_digit/365;
		}
		 else if (time_unit == "weeks"){
			age_digit = age_digit/52;
		}
		else if (time_unit == "months"){
			age_digit = age_digit/12;
		}
		else if (time_unit == "years"){
			age_digit = age_digit;
		}
		else{
			Alert("Oops something went wrong...");
		}
		localStorage.age = age_digit;
		
	}
	
	function getAge(){
		var age = localStorage.age;
		var planets = {data:[{planet:"mercury", days_in_year:88},
							{planet:"venus", days_in_year:225},
							{planet:"earth", days_in_year:365},
							{planet:"mars", days_in_year:687},
							{planet:"jupiter", days_in_year:4307},
							{planet:"saturn", days_in_year:10731},
							{planet:"uranus", days_in_year:30660},
							{planet:"neptune", days_in_year:59860},
							{planet:"pluto", days_in_year:90520}]};
		var day = age * 365;
		for(var i = 0, len = planets.data.length; i < len; i++){
			planetary_age = (day/planets.data[i].days_in_year).toFixed(2);
			document.getElementById(planets.data[i].planet + "_age").innerText = planetary_age;
		}
	}
	
