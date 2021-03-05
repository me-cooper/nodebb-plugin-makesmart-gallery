'use strict';

const controllers = require('./lib/controllers');
const cheerio = require('cheerio');

const plugin = {};

var debug = false;

function myDebug(msg){
	if(debug){
		console.log(msg);
	}
}

plugin.init = function (params, callback) {

	console.log("nodebb-plugin-makesmart-gallery init()");
	callback();


};

plugin.convertImagesToGallery = function  (data, callback) {

	var postHTML = data.postData.content;
	// cheerio >< null, false to not add <html> overhead
	var $ = cheerio.load(postHTML, null, false);

	$('p').each(function() {
		var isImageGallery = containImageGallery($(this).text());
		
		if(isImageGallery){

			var galleryParagraph = $(this);
			var imageSrcs = [];
			var imageAlt = [];

			galleryParagraph.find('img').each(function() {
				imageSrcs.push($(this).attr('src'));
				imageAlt.push($(this).attr('alt'));
			})



			if(imageSrcs.length != 0){
				var index = 0;
				galleryParagraph.html('<div class="swiper-container makesmart-image-gallery"><div class="swiper-wrapper" style="padding-bottom: 40px;"></div><div class="swiper-pagination"></div><div class="swiper-button-next"></div><div class="swiper-button-prev"></div></div>');
				var collectionContainer = $(this).find('div.swiper-wrapper');

				imageSrcs.forEach(function(src){
					collectionContainer.append('<div class="swiper-slide makesmart-image-gallery-image">' + '<img src="' + src + '" alt="' + imageAlt[index] + '" class="img-responsive img-markdown" style="display: block; margin-left: auto; margin-right: auto; -webkit-box-shadow: 0px 19px 24px -15px rgba(0,0,0,0.75); -moz-box-shadow: 0px 19px 24px -15px rgba(0,0,0,0.75); box-shadow: 0px 19px 24px -15px rgba(0,0,0,0.75);">' + '</div>');
					index++;
				});

			}

			/*
				imageSrcs.forEach(function(src){
					galleryParagraph.append(baseUrl + src);
				})
			*/

		}

	});

	myDebug("POST PARSED");
	
	data.postData.content = $.html();
	callback(null, data);

}

module.exports = plugin;



function containImageGallery(text){

	var isImageGallery = text.includes("[[gallery]]");

	return isImageGallery;

}
