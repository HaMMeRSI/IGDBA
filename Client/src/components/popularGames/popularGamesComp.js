require('./popularGamesCtrl');
require('./popularGamesStyle');

IGDBA.directive('popularGames', () => {
	return {
		template: require('./popularGamesView.html'),
		controller: 'popularGamesCtrl',
		controllerAs: 'pg',
	};
});
