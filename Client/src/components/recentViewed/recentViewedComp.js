require('./recentViewedCtrl');
require('./recentViewedStyle');

IGDBA.directive('recentViewed', () => {
	return {
		template: require('./recentViewedView.html'),
		controller: 'recentViewedCtrl',
		controllerAs: 'rv',
	};
});
