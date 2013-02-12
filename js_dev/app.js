//swap out pngs if svg is not supported - /gsdesign.com/blog/practical-svg-usage/
$(document).ready(function() {
  if (Modernizr.inlinesvg) {
    $('.swap').each(function() {
	  var $this = $(this);
	  var src = $this.attr("src").replace(".png", ".svg");
	  $this.attr("src", src); 
	}); 
  } 
});