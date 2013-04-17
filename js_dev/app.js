//swap out pngs if svg is not supported - /gsdesign.com/blog/practical-svg-usage/
$(document).ready(function() {
  if (Modernizr.inlinesvg) {
    $('img').each(function() {
	  var $this = $(this);
	  var src = $this.attr("src").replace(".png", ".svg");
	  if (!$this.hasClass("no-svg") {
	  	$this.attr("src", src); 
	  }
	}); 
  } 
});

// Custom styles && scripts per browser/os/display density - /conditionizr.com/docs.php
conditionizr({
	debug      : true,
	scriptSrc  : 'js/conditionizr/',
	styleSrc   : 'css/conditionizr/',
	ieLessThan : { active: true, version: '9', scripts: true, styles: true, classes: true, customScript: false},
	chrome     : { scripts: true, styles: true, classes: true, customScript: false },
	safari     : { scripts: true, styles: true, classes: true, customScript: false },
	opera      : { scripts: true, styles: true, classes: true, customScript: false },
	firefox    : { scripts: true, styles: true, classes: true, customScript: false },
	ie10       : { scripts: true, styles: true, classes: true, customScript: false },
	ie9        : { scripts: true, styles: true, classes: true, customScript: false },
	ie8        : { scripts: true, styles: true, classes: true, customScript: false },
	ie7        : { scripts: true, styles: true, classes: true, customScript: false },
	ie6        : { scripts: true, styles: true, classes: true, customScript: false },
	retina     : { scripts: true, styles: true, classes: true, customScript: false },
	touch      : { scripts: true, styles: true, classes: true, customScript: false },
	mac        : true,
	win        : true,
	x11        : true,
	linux      : true
});