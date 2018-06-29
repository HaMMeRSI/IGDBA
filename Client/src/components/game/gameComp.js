require('./gameCtrl');
require('./gameStyle');

IGDBA.directive('game', () => {
	return {
		template: require('./gameView.html'),
		controller: 'gameCtrl',
		controllerAs: 'game',
		replace: true
	};
});
