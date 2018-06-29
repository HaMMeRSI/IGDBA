export default function () {
	require('./controller');
	require('./component.css');

	IGDBA.directive('app', () => {
		return {
			template: require('./view.html'),
			controller: 'appCtrl',
			controllerAs: 'appa',
			replace: true
		};
	});
}
