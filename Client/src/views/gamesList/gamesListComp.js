require('./gamesListCtrl');
require('./gamesListStyle');

IGDBA.directive('game', () => {
	return {
		template: require('./gameView.html'),
		controller: 'gameCtrl',
		controllerAs: 'g',
		restrict: 'E',
		replace: true,
		scope: {},
		link (scope, element, attrs, tabsCtrl) {
			const images = [
				'jssqwk2ng823u1ypb8l6.jpg',
				'faqrpb5usp5leipmwgtq.jpg',
				'bhktxmqgh2e4r8up9lla.png',
				'kkxkowcnykt33decskx9.jpg',
				'mdeqyhinxuqkalxt7rkh.jpg',
				'mmt37d7raclocfrqsdlm.png',
				'oz7k2w0a30xgcdszj5kr.jpg',
				'ryyizpgb88johwu5vnng.png',
				'sbbj6qanxrypcseipe5r.png',
				'sgmlxamskqyg2egmknat.jpg',
				'vkdea0wwyn0zx8fjs1kt.jpg',
				'xozq6gye3ne6xjn4y3m9.png'
			];
			const url = images[parseInt(Math.random() * images.length)];
			scope.url = url;
		}
	};
});
