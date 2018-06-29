import angular from 'angular';
import mainCtrl from './mainCtrl';
import mainComp from './components/main/component';

const MODULE_NAME = 'IGDBA';
window.IGDBA = angular.module(MODULE_NAME, [])
	.controller('mainCtrl', mainCtrl);

mainComp();
