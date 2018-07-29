/*!
 * kissimmeevill.us main javascript page
 * http://kissimmeevilla.us
 * http://villakissimmee.co.uk
 *
 * Copyright 2010, Carlos Butler
 *
 * Date: Sat Jul 25 12:32:38 2010 +0000
 */
function popUpWindow(url, strWidth, strHeight){
	var windowOptions = "resizable=no,toolbar=no,location=no,scrollbars=yes,width="+strWidth+",height="+strHeight+"";
	var newWindow = window.open(url, 'newWin', windowOptions);
	newWindow.focus();
}
var hasBeenClicked = 0;
function preLoadImages(){
	for(var i=0;i<=3;i++){
		document.write("<img src='http://kissimmeevilla.us/images/mainContent-BG/mainContent-BG" + i + ".jpg' style='display:none;' />");
	}
	for(var i=6;i<=15;i++){
		document.write("<img src='http://kissimmeevilla.us/images/mainContent-BG/mainContent-BG" + i + ".jpg' style='display:none;' />");
	}
}

function fadeOutItem(divID, speed){ // divID needs to be passed as string, speed needs to be passed as integer measured in milliseconds
	hasBeenClicked = 1;
	if(hasBeenClicked == 1){
		$(divID).fadeOut(speed);
		setTimeout("hasBeenClicked = 0", speed);
	}
}

function fadeInItem(divID, speed){
	hasBeenClicked = 1;
	if(hasBeenClicked = 1){
		$(divID).fadeIn(speed);
		setTimeout("hasBeenClicked = 1", speed);
	}
}

function loadImages(time){
	preLoadImages();
	setTimeout("fadeOutItem('#welcome',700)",time);
	setTimeout("window.location = 'home'",time+800);
}

jQuery(function( $ ){
	/**
	 * Most jQuery.localScroll's settings, actually belong to jQuery.ScrollTo, check it's demo for an example of each option.
	 * @see http://flesler.demos.com/jquery/scrollTo/
	 * You can use EVERY single setting of jQuery.ScrollTo, in the settings hash you send to jQuery.LocalScroll.
	 */
	// The default axis is 'y', but in this demo, I want to scroll both
	// You can modify any default like this
	$.localScroll.defaults.axis = 'yx';
	// Scroll initially if there's a hash (#something) in the url 
	$.localScroll.hash({
		target: '#content', // Could be a selector or a jQuery object too.
		queue:true,
		duration:1500
	});
	/**
	 * NOTE: I use $.localScroll instead of $('#navigation').localScroll() so I
	 * also affect the >> and << links. I want every link in the page to scroll.
	 */
	$.localScroll({
		target: '#content', // could be a selector or a jQuery object too.
		queue:true,
		duration:1800,
		hash:true,
		onBefore:function( e, anchor, $target ){
			// The 'this' is the settings object, can be modified
		},
		onAfter:function( anchor, settings ){
			// The 'this' contains the scrolled element (#content)
		}
	});
});
/*
 * jQuery Color Animations
 * Copyright 2007 John Resig
 * Released under the MIT and GPL licenses.
 */

(function(jQuery){

	// We override the animation for all of these color styles
	jQuery.each(['backgroundColor', 'borderBottomColor', 'borderLeftColor', 'borderRightColor', 'borderTopColor', 'color', 'outlineColor'], function(i,attr){
		jQuery.fx.step[attr] = function(fx){
			if ( fx.state == 0 ) {
				fx.start = getColor( fx.elem, attr );
				fx.end = getRGB( fx.end );
			}

			fx.elem.style[attr] = "rgb(" + [
				Math.max(Math.min( parseInt((fx.pos * (fx.end[0] - fx.start[0])) + fx.start[0]), 255), 0),
				Math.max(Math.min( parseInt((fx.pos * (fx.end[1] - fx.start[1])) + fx.start[1]), 255), 0),
				Math.max(Math.min( parseInt((fx.pos * (fx.end[2] - fx.start[2])) + fx.start[2]), 255), 0)
			].join(",") + ")";
		}
	});

	// Color Conversion functions from highlightFade
	// By Blair Mitchelmore
	// http://jquery.offput.ca/highlightFade/

	// Parse strings looking for color tuples [255,255,255]
	function getRGB(color) {
		var result;

		// Check if we're already dealing with an array of colors
		if ( color && color.constructor == Array && color.length == 3 )
			return color;

		// Look for rgb(num,num,num)
		if (result = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color))
			return [parseInt(result[1]), parseInt(result[2]), parseInt(result[3])];

		// Look for rgb(num%,num%,num%)
		if (result = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(color))
			return [parseFloat(result[1])*2.55, parseFloat(result[2])*2.55, parseFloat(result[3])*2.55];

		// Look for #a0b1c2
		if (result = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(color))
			return [parseInt(result[1],16), parseInt(result[2],16), parseInt(result[3],16)];

		// Look for #fff
		if (result = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(color))
			return [parseInt(result[1]+result[1],16), parseInt(result[2]+result[2],16), parseInt(result[3]+result[3],16)];

		// Otherwise, we're most likely dealing with a named color
		return colors[jQuery.trim(color).toLowerCase()];
	}
	
	function getColor(elem, attr) {
		var color;

		do {
			color = jQuery.curCSS(elem, attr);

			// Keep going until we find an element that has color, or we hit the body
			if ( color != '' && color != 'transparent' || jQuery.nodeName(elem, "body") )
				break; 

			attr = "backgroundColor";
		} while ( elem = elem.parentNode );

		return getRGB(color);
	};
	
	// Some named colors to work with
	// From Interface by Stefan Petre
	// http://interface.eyecon.ro/
	
})(jQuery);

function changeLinksHover(linkID,color){
	$(linkID).stop();	
	switch(linkID){
		case '#homeLink': 
			if(linksColour[0] != 1){
				$(linkID).animate({color:color},250);
			}
		break;
		case '#galleryLink': 
			if(linksColour[1] != 1){
				$(linkID).animate({color:color},250);
			}
		break;
		case '#testimonialLink': 
			if(linksColour[2] != 1){
				$(linkID).animate({color:color},250);
			}
		break;
		case '#contactLink': 
			if(linksColour[3] != 1){
				$(linkID).animate({color:color},250);
			}
		break;
		case '#areasLink': 
			if(linksColour[4] != 1){
				$(linkID).animate({color:color},250);
			}
		break;
	}
}

function menu(){
	$('#dropDown').animate({opacity: 1}, 500);
}

$(document).ready(function(){
	$('li.headlink ul').animate({opacity: 0}, 1);
	$('li.headlink').hover(
		function() {
			$('ul', this).css('display', 'block');
			$('ul', this).animate({opacity: 1}, 500);
		},
		function() {
			$('ul', this).animate({opacity:0}, 500, function(){
				$('ul', this).css('display', 'none');
			});
			//$('ul', this).css('display', 'none'); 
		}
	);
});

var imgSet;
var linksColour = new Array();
linksColour[0] = 1;
linksColour[1], linksColour[2], linksColour[3], linksColour[4] = 0;
function changeLinksBackground(bgID,linkID,color){
	if(imgSet != bgID){
		$('#mainContentBGImg').animate({opacity: 0}, 500);
		$('#mainContentBGImg').queue(function() {
			$('#mainContentBGImg').attr({src: "http://www.kissimmeevilla.us/images/mainContent-BG/mainContent-BG" + bgID + ".jpg"});
			$(this).dequeue();
		});
		imgSet = bgID;
		setTimeout("$('#mainContentBGImg').animate({opacity: 1}, 500)",1200);
	}
	
	$(linkID).stop();
	switch(linkID){
		case '#homeLink': linksColour[0] = 1; linksColour[1] = 0; linksColour[2] = 0; linksColour[3] = 0; linksColour[4] = 0;
		break;
		case '#galleryLink': linksColour[0] = 0; linksColour[1] = 1; linksColour[2] = 0; linksColour[3] = 0; linksColour[4] = 0;
		break;
		case '#testimonialLink': linksColour[0] = 0; linksColour[1] = 0; linksColour[2] = 1; linksColour[3] = 0; linksColour[4] = 0;
		break;
		case '#contactLink': linksColour[0] = 0; linksColour[1] = 0; linksColour[2] = 0; linksColour[3] = 1; linksColour[4] = 0;
		break;
		case '#areasLink': linksColour[0] = 0; linksColour[1] = 0; linksColour[2] = 0; linksColour[3] = 0; linksColour[4] = 1;
		break;
	}
	$('#homeLink').animate({color:'#CACACA'},250);
	$('#galleryLink').animate({color:'#CACACA'},250);
	$('#testimonialLink').animate({color:'#CACACA'},250);
	$('#contactLink').animate({color:'#CACACA'},250);
	$('#areasLink').animate({color:'#CACACA'},250);
	$(linkID).animate({color:color},250);
}

function changeBackground(bgID){
	$('#mainContentBGImg').animate({opacity: 0}, 500);
	$('#mainContentBGImg').queue(function() {
		$('#mainContentBGImg').attr({src: "http://www.kissimmeevilla.us/images/mainContent-BG/mainContent-BG" + bgID + ".jpg"});
		$(this).dequeue();
	});
	setTimeout("$('#mainContentBGImg').animate({opacity: 1}, 500)",1300);
}
function clearBox(elementName){
	switch(elementName){
		case 'name': if(document.getElementById(elementName).value == "Name"){document.getElementById(elementName).value = "";}
		break;
		case 'contactNumber': if(document.getElementById(elementName).value == "Contact Number"){document.getElementById(elementName).value = "";}
		break;
		case 'email': if(document.getElementById(elementName).value == "Email Address"){document.getElementById(elementName).value = "";}
		break;
		case 'question': if(document.getElementById(elementName).value == "Your Question"){document.getElementById(elementName).value = "";}
		break;
	}
}

function returnInfo(elementName){
	switch(elementName){
		case 'name': if(document.getElementById(elementName).value == ""){document.getElementById(elementName).value = "Name";}
		break;
		case 'contactNumber': if(document.getElementById(elementName).value == ""){document.getElementById(elementName).value = "Contact Number";}
		break;
		case 'email': if(document.getElementById(elementName).value == ""){document.getElementById(elementName).value = "Email Address";}
		break;
		case 'question': if(document.getElementById(elementName).value == ""){document.getElementById(elementName).value = "Your Question";}
		break;
	}
}

function areasInfo(areaID,langID){
	if(langID == 'en'){
		switch(areaID){
			//Ground floor
			case 'double': $('.areasInfo').replaceWith('<div class="areasInfo"><!-- Deliberately left BLANK --></div>');
			break;
			case 'twinground': $('.areasInfo').replaceWith('<div class="areasInfo"><!-- Deliberately left BLANK --></div>');
			break;
			case 'living': $('.areasInfo').replaceWith('<div class="areasInfo">Lounge area features comfortable sofas, coffee tables, large LCD cable television, telephone and a variety of pictures and plants</div>');
			break;
			case 'kitchen': $('.areasInfo').replaceWith('<div class="areasInfo">Our open plan, fully equipped, eat-in kitchen boasts a fridge-freezer, cooker, microwave, dishwasher and a variety of electrical gadgets</div>');
			break;
			case 'dinning': $('.areasInfo').replaceWith('<div class="areasInfo">Executive style dining area boasts comfortable furnishings and a lavishly decorated dining table</div>');
			break;
			case 'swimming': $('.areasInfo').replaceWith('<div class="areasInfo">Outside the luxury villa you can swim in a 8.5x4.25m, private and heated swimming pool which includes a jacuzzi. The sun-deck provides space for a barbecue, sun-beds to relax by the poolside, day or night</div>');
			break;
			// First floor
			case 'master': $('.areasInfo').replaceWith('<div class="areasInfo">The master bedroom exclusively designed with his and hers separate wash area including a shower unit</div>');
			break;
			case 'queen': $('.areasInfo').replaceWith('<div class="areasInfo"><!-- Deliberately left BLANK --></div>');
			break;
			case 'twin': $('.areasInfo').replaceWith('<div class="areasInfo"><!-- Deliberately left BLANK --></div>');
			break;
			case 'landing': $('.areasInfo').replaceWith('<div class="areasInfo"><!-- Deliberately left BLANK --></div>');
			break;
		}
	}
	else if(langID == 'es'){
		switch(areaID){
			case 'master': $('.areasInfo').replaceWith('<div class="areasInfo">The master bedroom exclusivly designed with his and hers separate wash area including a shower unit.SPANISH</div>');
			break;
			case 'queen': $('.areasInfo').replaceWith('<div class="areasInfo">Queen span</div>');
			break;
			case 'double': $('.areasInfo').replaceWith('<div class="areasInfo">Double span</div>');
			break;
			case 'twin': $('.areasInfo').replaceWith('<div class="areasInfo">Twin span</div>');
			break;
			case 'twinground': $('.areasInfo').replaceWith('<div class="areasInfo">Twin Ground span</div>');
			break;
			case 'kitchen': $('.areasInfo').replaceWith('<div class="areasInfo">Kitchen span</div>');
			break;
			case 'living': $('.areasInfo').replaceWith('<div class="areasInfo">Living span</div>');
			break;
		}
	}
}