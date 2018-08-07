import './gameView.less';

export default class gameViewCtrl {
	constructor ($scope, $route, $routeParams, $location) {
		$scope.title = 'Age of Empires: Definitive Edition';
		$scope.releaseDate = '20th Feb, 2018';
		$scope.publisher = 'Forgotten Empires LLC';
		$scope.generes = 'Adventure, Real Time Strategy (RTS), Simulator, Strategy';
		$scope.platforms = 'PC (Microsoft Windows)';
		$scope.desc = `together all of the officially released content with modernized gameplay, all-new visuals and a host of other new features,
			Age of Empires: Definitive Edition is the complete RTS package. Engage in over 40 hours of updated campaign content with
			new narration and pacing, jump online in up to 8-player battles with new competitive features and modes, experience 4K
			HD visuals with overhauled animations, get creative with the scenario builder and share your creations with easy mod support.
			There’s never been a better time to jump in to Age of Empires. Welcome back to history.`;
	}
}

IGDBA.controller('gameViewCtrl', gameViewCtrl);
