export default class AppCtrl {
	constructor ($scope) {
		this.url = 'https://github.com/HuMMeRSI/IGDBA';
		var c = document.getElementById('myCanvas');
		var ctx = c.getContext('2d');
		ctx.font = '20px Arial';
		ctx.fillStyle = 'white';
		ctx.fillText('IGDBA', 10, 30);
	}
}
IGDBA.controller('appCtrl', AppCtrl);
