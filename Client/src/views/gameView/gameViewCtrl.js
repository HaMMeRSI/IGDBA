import './gameView.less';

export default class gameViewCtrl {
	constructor ($scope, $route, $routeParams, $location) {
		this.url = 'https://images.igdb.com/igdb/image/upload/t_cover_big/faqrpb5usp5leipmwgtq.jpg';
	}
}

IGDBA.controller('gameViewCtrl', gameViewCtrl);
