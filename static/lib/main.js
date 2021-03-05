'use strict';

var debug = false;

/* globals document, $ */

$(document).ready(function () {
	/*
		This file shows how client-side javascript can be included via a plugin.
		If you check `plugin.json`, you'll see that this file is listed under "scripts".
		That array tells NodeBB which files to bundle into the minified javascript
		that is served to the end user.

		Some events you can elect to listen for:

		$(document).ready();			Fired when the DOM is ready
		$(window).on('action:ajaxify.end', function(data) { ... });			"data" contains "url"
	*/

	myDebug('nodebb-plugin-makesmart-gallery: loaded');
	// Note how this is shown in the console on the first load of every page
});

$(window).on('action:ajaxify.end', function(data) {

	require(['swiper'], function (Swiper) {
	
	
		var swiper = new Swiper('.makesmart-image-gallery', {
			autoHeight: true,
			loop: true,
			pagination: {
			  el: '.swiper-pagination',
			  clickable: true,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			}
		  });
	
	});

});	


function myDebug(msg){
	if(bdeug){
		console.log(msg);
	}
}