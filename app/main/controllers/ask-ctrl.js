'use strict';
angular.module( 'main' )
	.controller( 'AskCtrl', function ( $log, $scope ) {
		$scope.gotTime = false;
		$scope.gotDate = false;
		$log.log( 'Hello from your Controller: AskCtrl in module main:. This is your controller:', this );
		var datePickerCallback = function ( val ) {
			if ( typeof( val ) === 'undefined' ) {
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
		$scope.epochTime = '';
		var timePickerCallback = function ( val ) {
			if ( typeof( val ) === 'undefined' ) {
				$log.log( 'Time not selected' );
			} else {
				$scope.gotTime = true;
				var selectedTime = new Date( val * 1000 );
				$scope.epochTime = val;
				$scope.selectedTime = ' Selected: ' + selectedTime.getUTCHours() + ':' + selectedTime.getUTCMinutes();
				$log.log( 'Selected epoch is : ' + val + 'and the time is ' + selectedTime.getUTCHours() + ':' + selectedTime.getUTCMinutes() + 'in UTC' );
			}
		};
		$scope.timePickerObject = {
			format: 12,
			callback: function ( val ) {
				timePickerCallback( val );
			}
		}
	} );
