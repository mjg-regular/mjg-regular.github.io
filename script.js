var targetDate = new Date("Feb 2, 2024 19:00:00 UTC").getTime();

var updateCountdown = function() {
	var now = new Date().getTime();
	var distance = targetDate - now;

	if (distance < 0) {
		clearInterval(interval);

		document.getElementById("execution-time").style.color = "red";
		document.getElementById("on-time-label").style.color = "red";
		document.getElementById("on-time").style.color = "red";

		var date = new Date(targetDate);
		var year = date.getFullYear();
		var month = ("0" + (date.getMonth() + 1)).slice(-2);
		var day = ("0" + date.getDate()).slice(-2);
		var hour = ("0" + date.getUTCHours()).slice(-2);
		var minute = ("0" + date.getUTCMinutes()).slice(-2);
		var second = ("0" + date.getUTCSeconds()).slice(-2);
		document.getElementById("on-time").innerHTML = year + ":" + month + ":" + day + "  " + hour + ":" + minute + ":" + second;

		return;
	}

	var date = new Date(now);
	var year = date.getFullYear();
	var month = ("0" + (date.getMonth() + 1)).slice(-2);
	var day = ("0" + date.getDate()).slice(-2);
	var hour = ("0" + date.getUTCHours()).slice(-2);
	var minute = ("0" + date.getUTCMinutes()).slice(-2);
	var second = ("0" + date.getUTCSeconds()).slice(-2);

	document.getElementById("on-time").innerHTML = year + ":" + month + ":" + day + "  " + hour + ":" + minute + ":" + second;
};

var interval = setInterval(updateCountdown, 1000);
