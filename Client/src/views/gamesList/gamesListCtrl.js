import './gamesListStyle.less';

export default class GamesListCtrl {
	constructor ($scope, $route, $routeParams, $location) {
		this.url = 'https://images.igdb.com/igdb/image/upload/t_cover_big/faqrpb5usp5leipmwgtq.jpg';
		$scope.openGameView = this.openGameView;
		$scope.games = [
			{
				'_id': '5b362c84ed445d0d00f03262',
				'name': 'test',
				'genre': 'action',
				'company': 'ea',
				'description': 'bla bla bla',
				'image': 'jssqwk2ng823u1ypb8l6.jpg',
				'releaseDate': '1989-12-31T22:00:00.000Z',
				'score': 95
			},
			{
				'_id': '5b69900ef085192d6c6008d6',
				'name': 'test2',
				'genre': 'action',
				'company': 'ea',
				'description': 'bla bla bla',
				'image': 'kkxkowcnykt33decskx9.jpg',
				'releaseDate': '1989-12-31T22:00:00.000Z',
				'score': 95
			},
			{
				'_id': '5b69901af085192d6c6008d7',
				'name': 'test3',
				'genre': 'action',
				'company': 'ea',
				'description': 'bla bla bla',
				'image': 'sgmlxamskqyg2egmknat.jpg',
				'releaseDate': '1989-12-31T22:00:00.000Z',
				'score': 95
			},
			{
				'_id': '5b362c84ed445d0d00f03262',
				'name': 'test',
				'genre': 'action',
				'company': 'ea',
				'description': 'bla bla bla',
				'image': 'jssqwk2ng823u1ypb8l6.jpg',
				'releaseDate': '1989-12-31T22:00:00.000Z',
				'score': 95
			},
			{
				'_id': '5b69900ef085192d6c6008d6',
				'name': 'test2',
				'genre': 'action',
				'company': 'ea',
				'description': 'bla bla bla',
				'image': 'kkxkowcnykt33decskx9.jpg',
				'releaseDate': '1989-12-31T22:00:00.000Z',
				'score': 95
			},
			{
				'_id': '5b69901af085192d6c6008d7',
				'name': 'test3',
				'genre': 'action',
				'company': 'ea',
				'description': 'bla bla bla',
				'image': 'sgmlxamskqyg2egmknat.jpg',
				'releaseDate': '1989-12-31T22:00:00.000Z',
				'score': 95
			},
			{
				'_id': '5b362c84ed445d0d00f03262',
				'name': 'test',
				'genre': 'action',
				'company': 'ea',
				'description': 'bla bla bla',
				'image': 'jssqwk2ng823u1ypb8l6.jpg',
				'releaseDate': '1989-12-31T22:00:00.000Z',
				'score': 95
			},
			{
				'_id': '5b69900ef085192d6c6008d6',
				'name': 'test2',
				'genre': 'action',
				'company': 'ea',
				'description': 'bla bla bla',
				'image': 'kkxkowcnykt33decskx9.jpg',
				'releaseDate': '1989-12-31T22:00:00.000Z',
				'score': 95
			},
			{
				'_id': '5b69901af085192d6c6008d7',
				'name': 'test3',
				'genre': 'action',
				'company': 'ea',
				'description': 'bla bla bla',
				'image': 'sgmlxamskqyg2egmknat.jpg',
				'releaseDate': '1989-12-31T22:00:00.000Z',
				'score': 95
			},
			{
				'_id': '5b362c84ed445d0d00f03262',
				'name': 'test',
				'genre': 'action',
				'company': 'ea',
				'description': 'bla bla bla',
				'image': 'jssqwk2ng823u1ypb8l6.jpg',
				'releaseDate': '1989-12-31T22:00:00.000Z',
				'score': 95
			},
			{
				'_id': '5b69900ef085192d6c6008d6',
				'name': 'test2',
				'genre': 'action',
				'company': 'ea',
				'description': 'bla bla bla',
				'image': 'kkxkowcnykt33decskx9.jpg',
				'releaseDate': '1989-12-31T22:00:00.000Z',
				'score': 95
			},
			{
				'_id': '5b69901af085192d6c6008d7',
				'name': 'test3',
				'genre': 'action',
				'company': 'ea',
				'description': 'bla bla bla',
				'image': 'sgmlxamskqyg2egmknat.jpg',
				'releaseDate': '1989-12-31T22:00:00.000Z',
				'score': 95
			},
			{
				'_id': '5b362c84ed445d0d00f03262',
				'name': 'test',
				'genre': 'action',
				'company': 'ea',
				'description': 'bla bla bla',
				'image': 'jssqwk2ng823u1ypb8l6.jpg',
				'releaseDate': '1989-12-31T22:00:00.000Z',
				'score': 95
			},
			{
				'_id': '5b69900ef085192d6c6008d6',
				'name': 'test2',
				'genre': 'action',
				'company': 'ea',
				'description': 'bla bla bla',
				'image': 'kkxkowcnykt33decskx9.jpg',
				'releaseDate': '1989-12-31T22:00:00.000Z',
				'score': 95
			},
			{
				'_id': '5b69901af085192d6c6008d7',
				'name': 'test3',
				'genre': 'action',
				'company': 'ea',
				'description': 'bla bla bla',
				'image': 'sgmlxamskqyg2egmknat.jpg',
				'releaseDate': '1989-12-31T22:00:00.000Z',
				'score': 95
			},
			{
				'_id': '5b362c84ed445d0d00f03262',
				'name': 'test',
				'genre': 'action',
				'company': 'ea',
				'description': 'bla bla bla',
				'image': 'jssqwk2ng823u1ypb8l6.jpg',
				'releaseDate': '1989-12-31T22:00:00.000Z',
				'score': 95
			},
			{
				'_id': '5b69900ef085192d6c6008d6',
				'name': 'test2',
				'genre': 'action',
				'company': 'ea',
				'description': 'bla bla bla',
				'image': 'kkxkowcnykt33decskx9.jpg',
				'releaseDate': '1989-12-31T22:00:00.000Z',
				'score': 95
			},
			{
				'_id': '5b69901af085192d6c6008d7',
				'name': 'test3',
				'genre': 'action',
				'company': 'ea',
				'description': 'bla bla bla',
				'image': 'sgmlxamskqyg2egmknat.jpg',
				'releaseDate': '1989-12-31T22:00:00.000Z',
				'score': 95
			},
		];
	}

	openGameView (id) {
		window.location.href = `#!gameView?id=${id}`;
	}
}
IGDBA.controller('gamesListCtrl', GamesListCtrl);
