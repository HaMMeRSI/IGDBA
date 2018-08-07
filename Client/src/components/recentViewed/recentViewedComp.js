require('./recentViewedCtrl');
require('./recentViewedStyle');

IGDBA.directive('recentViewed', () => {
	return {
		template: require('./recentViewedComponent.html'),
		controller: 'recentViewedCtrl',
		controllerAs: 'rv',
	};
});
