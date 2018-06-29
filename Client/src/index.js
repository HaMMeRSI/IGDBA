import angular from 'angular';
import 'reset-css';
import './style/main';
import appCtrl from './appCtrl';
import mainComp from './components/main/mainComp';

const MODULE_NAME = 'IGDBA';
window.IGDBA = angular.module(MODULE_NAME, [])
	.controller('appCtrl', appCtrl);

mainComp();
