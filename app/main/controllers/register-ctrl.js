'use strict';
angular.module( 'main' )
	.controller( 'RegisterCtrl', function ( $log, $scope ) {
		$scope.gotDate = false;
		$log.log( 'Hello from your Controller: RegisterCtrl in module main:. This is your controller:', this );
		var datePickerCallback = function ( val ) {
			if ( typeof ( val ) === 'undefined' ) {
				$log.log( 'No date selected', this );
			} else {
				$scope.gotDate = true;
				$scope.datepickerObject.inputDate = val;
				$log.log( 'Selected date is : ' + val );
			}
		};
		$scope.datepickerObject = {
			inputDate: '',
			callback: function ( val ) {
				datePickerCallback( val );
			}
		}
	} );