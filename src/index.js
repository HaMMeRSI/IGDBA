import angular from 'angular';

import './style/main.css';

let app = () => {
	return {
		template: require('./main.html'),
		controller: 'AppCtrl',
		controllerAs: 'app'
	};
};

class AppCtrl {
	constructor () {
		this.url = 'https://github.com/HuMMeRSI/IGDBA';
	}
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
	.directive('app', app)
	.controller('AppCtrl', AppCtrl);

export default MODULE_NAME;
