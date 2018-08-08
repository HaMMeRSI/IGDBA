export default class mainViewCtrl {
	constructor ($scope, $route, $routeParams, $location, $http) {
		this.url = 'https://images.igdb.com/igdb/image/upload/t_cover_big/faqrpb5usp5leipmwgtq.jpg';
		$scope.videoUrl = require('@/assets/Videos/videoplayback.mp4');
	}
}

IGDBA.controller('mainViewCtrl', mainViewCtrl);
