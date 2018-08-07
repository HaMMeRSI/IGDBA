require('./popularGamesCtrl');
require('./popularGamesStyle');

IGDBA.directive('popularGames', () => {
	return {
		template: require('./popularGamesComponent.html'),
		controller: 'popularGamesCtrl',
		controllerAs: 'pg',
	};
});
