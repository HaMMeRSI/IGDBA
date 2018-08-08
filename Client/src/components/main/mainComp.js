export default function () {
	require('./mainCtrl');
	require('./mainStyle');
	require('@/components/popularGames/popularGamesComp');
	require('@/components/game/gameComp');
	require('@/components/recentViewed/recentViewedComp');

	IGDBA.directive('app', () => {
		return {
			template: require('./mainComponent.html'),
			controller: 'appCtrl',
			controllerAs: 'appa',
			restrict: 'E',
			replace: true,
			scope: {},
			link (scope, element, attrs, tabsCtrl) {
				scope.filter = {};
				scope.onSearchClick = ($e) => {
					Object.keys(scope.filter).forEach(key => {
						if (scope.filter[key] === '') {
							delete scope.filter[key];
						}
					});

					window.location.href = `#!games?filter=${JSON.stringify(scope.filter)}`;
				};
			}
		};
	});
}
