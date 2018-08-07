import angular from 'angular';
import 'reset-css';
import './style/main';
import appCtrl from './appCtrl';
import mainComp from './components/main/mainComp';

const MODULE_NAME = 'IGDBA';
window.IGDBA = angular.module(MODULE_NAME, [require('angular-route')])
	.controller('appCtrl', appCtrl)
	.config(($routeProvider) => {
		$routeProvider.when('/', {
			template: `
<popular-games id="popularGamesContainer"></popular-games>
<recent-viewed id="recentViewedContainer"></recent-viewed>
`
		}, {
			templateUrl: ''
		});
	});

mainComp();
