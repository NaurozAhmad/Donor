'use strict';
angular.module( 'main' )
	.controller( 'RegisterCtrl', function ( $log, $scope, $http, $cordovaDevice ) {
		$scope.donor = {
			'type': '',
			'donated': '',
			'uuid': 'test UUID'
		};
		$scope.gotDate = false;
		$log.log( 'Hello from your Controller: RegisterCtrl in module main:. This is your controller:', this );
		var datePickerCallback = function ( val ) {
			if ( typeof ( val ) === 'undefined' ) {
				$log.log( 'No date selected', this );
			} else {
				$scope.gotDate = true;
				$scope.datepickerObject.inputDate = val;
				$scope.donor.donated = val;
				// $scope.donor.uuid = $cordovaDevice.getUUID();
				$log.log( 'Selected date is : ' + val );
			}
		};

		$scope.datepickerObject = {
			inputDate: '',
			callback: function ( val ) {
				datePickerCallback( val );
			}
		}
		$scope.register = function () {
			$log.log('going');
			$http.post('http://crescentdonor.senhoit.com/register.php', $scope.donor)
				.then(function (response) {
					$log.log(response.data);
				});
		}
	} );