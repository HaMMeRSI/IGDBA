export default function () {
	require('./mainCtrl');
	require('./mainStyle');
	require('@/components/popularGames/popularGamesComp');
	require('@/components/game/gameComp');
	require('@/components/recentViewed/recentViewedComp');

	IGDBA.directive('app', () => {
		return {
			template: require('./mainView.html'),
			controller: 'appCtrl',
			controllerAs: 'appa',
			replace: true
		};
	});
}
