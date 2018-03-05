$(function() {
	timer();
})
var ctx = document.getElementById("chart1");
var ctx = new Chart(ctx, {
	type: 'bar',
	data: {
		labels: ["Food", "Water"],
		datasets: [{
			label: 'Amounts of life support aboard',
			data: [12, 19, 3],
			backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', ],
			borderColor: ['white', 'white', ],
			borderWidth: 1,
		}]
	},
	options: {
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero: true
				}
			}]
		}
	}
});
var atmosphereChart = document.getElementById("chart2").getContext('2d');
var atmosphereChart = new Chart(atmosphereChart, {
	type: 'bar',
	data: {
		datasets: [{
			label: 'Miscellaneous',
			data: [21, 78, 1],
			backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', ],
			borderColor: ['white', 'white', 'white', ],
			borderWidth: 1
		}],
		labels: ['Black Holes', 'Carbon Stars', 'Meteors']
	},
	options: {}
});
var defenseChart = document.getElementById("chart3").getContext('2d');
var defenseChart = new Chart(defenseChart, {
	type: 'line',
	data: {
		datasets: [{
			label: 'G-Force acceleration',
			data: [0, 2, 3],
			backgroundColor: ['rgba(54, 162, 235, 0.2)', ],
			borderColor: ['white'],
			borderWidth: 1
		}],
		labels: ['day 1', '100', '200']
	},
	options: {}
});

function timer() {
	window.setInterval(function() {
		var newSpeed = getRndInteger(44135, 44140);
		$(".current-speed").html(newSpeed);
	}, 100);
}

function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}
