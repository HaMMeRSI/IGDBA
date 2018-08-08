import './mapView.less';

export default class mapViewCtrl {
	constructor ($scope, $route, $routeParams, $location, $http) {
		this.url = 'https://images.igdb.com/igdb/image/upload/t_cover_big/faqrpb5usp5leipmwgtq.jpg';

		const map = new window.google.maps.Map(document.getElementById('map'), {
			center: { lat: 31.483424399819263, lng: 35.122759765625005 },
			zoom: 8
		});

		$http.get('http://localhost:3000/events/getAllEvents').then((res) => {
			$scope.events = res.data.map((event) => {
				return {
					id: event._id,
					lat: event.latitude,
					lng: event.longitude
				};
			});

			let marker;
			for (let currEvent of $scope.events) {
				marker = new window.google.maps.Marker({
					position: {
						lat: currEvent.lat,
						lng: currEvent.lng
					},
					map
				});

				console.log(marker);
			}
		});
	}
}

IGDBA.controller('mapViewCtrl', mapViewCtrl);
