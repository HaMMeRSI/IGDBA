import './facebookView.less';

export default class facebookViewCtrl {
	constructor ($scope, $route, $routeParams, $location, $http, $rootScope) {
		this.$scope = $scope;
		this.url = 'https://images.igdb.com/igdb/image/upload/t_cover_big/faqrpb5usp5leipmwgtq.jpg';
		this.at = 'EAANLf1Tlv5oBAPSUrt7eo1oOmXpDsNPjTNdnX6Dhfmjnq7a3vk8VRbu6usZATY1eqBKS3aC9vukTSv2bukHitzgV5IXZCbMdZAvJEtYEmqfJBy4qisezJ28ZCZAvwFmbedYArmLEnI0zlub7ZCUvvmqPnGiKDDwq3FhCtrbKz2kQXCj11b2eu4ZAeXx6vfJGb6Vt5Kt4VI2NGs96YUZAYjXs';

		if (!$rootScope.fbInited) {
			let js;
			let fjs = document.getElementsByTagName('script')[0];
			if (document.getElementById('facebook-jssdk')) { return; }
			js = document.createElement('script'); js.id = 'facebook-jssdk';
			js.src = 'https://connect.facebook.net/en_US/sdk.js';
			js.onload = () => {
				this.fbAsyncInit();
				$rootScope.fbInited = true;
			};
			fjs.parentNode.insertBefore(js, fjs);
		}

		if ($rootScope.fbInited) {
			this.fbAsyncInit();
		}
	}

	fbAsyncInit () {
		FB.init({
			appId: '927435187404698',
			cookie: true,
			xfbml: true,
			version: 'v3.1'
		});

		FB.AppEvents.logPageView();

		FB.api('/250421232236679/feed?access_token=' + this.at, (postResp) => {
			if (postResp && !postResp.error) {
				this.$scope.$apply(() => {
					this.$scope.posts = postResp.data;
				});

				postResp.data.forEach(post => {
					post.comments = [];
					this.loadPostComments(post);
				});
			}
		});
	}

	loadPostComments (post) {
		FB.api('/' + post.id + '/comments?access_token=' + this.at, (commentsResp) => {
			if (commentsResp.data.length) {
				this.$scope.$apply(() => {
					commentsResp.data.forEach((comment) => post.comments.push(comment));
				});
			}
		});
	}
}

IGDBA.controller('facebookViewCtrl', facebookViewCtrl);
