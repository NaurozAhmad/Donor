'use strict';

describe( 'module: main, controller: AskCtrl', function () {

	// load the controller's module
	beforeEach( module( 'main' ) );
	// load all the templates to prevent unexpected $http requests from ui-router
	beforeEach( module( 'ngHtml2Js' ) );

	// instantiate controller
	var AskCtrl;
	beforeEach( inject( function ( $controller ) {
		AskCtrl = $controller( 'AskCtrl' );
	} ) );

	it( 'should do something', function () {
		expect( !!AskCtrl ).toBe( true );
	} );

} );
