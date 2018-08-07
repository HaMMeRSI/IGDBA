import './mapView.less';

export default class mapViewCtrl {
	constructor ($scope, $route, $routeParams, $location, $http) {
		this.url = 'https://images.igdb.com/igdb/image/upload/t_cover_big/faqrpb5usp5leipmwgtq.jpg';

		const map = new window.google.maps.Map(document.getElementById('map'), {
			center: { lat: 31.483424399819263, lng: 35.122759765625005 },
			zoom: 8
		});
		var marker = new window.google.maps.Marker({
			position: {
				lat: 44,
				lng: 44
			},
			map
		});

		console.log(marker);
	}
}

IGDBA.controller('mapViewCtrl', mapViewCtrl);
