'use strict';

angular.module('clientbiddingApp')
  .controller('MainCtrl', function ($scope, socketService, dataService, $routeParams) {
		$scope.userName = 'User_' + Math.floor((Math.random() * 10000) + 1)
		$scope.allBids = [];
		$scope.users = [];
		$scope.bid = 0;
		$scope.highestBid = 0;
		$scope.name = '';
		$scope.picture = '';
		$scope.description = '';
		$scope.placeBid = placeBid;

		activate();

		function placeBid() {
			socketService.emit('place:bid', $scope.bid);
		}

		function activate() {
			var itemId = $routeParams.id;
			return getItem(itemId).then(function(){
				initSocketConnection();
			});

			function initSocketConnection () {
				socketService.on('connect', function () {
					socketService.emit('join', $scope.userName);

					socketService.on('last:bid', function (lastBid) {
						$scope.allBids.splice(0, 0, lastBid);
					});

					socketService.on('highest:bid', function (highestBid) {
						$scope.highestBid = highestBid.bid;
					});

					socketService.on('new:user', function (user) {
						$scope.users.push(user);
					});
				});
			}
		}

		function getItem(id) {
			return dataService.getItem(id)
				.then(function (data) {
					$scope.description = data.item.description;
					$scope.name = data.item.name;
					$scope.picture = data.item.picture;
				});
		}
	});
