(function($){$(document).ready(function(e){$("body").on("click",".js-toolbar-action",function(event){event.preventDefault();var $img=$(".book");if(!$img.hasClass("with-summary")){$img.addClass("with-summary");}else{$img.removeClass("with-summary");}});});var $window=$(window),$img=$(".book");function resize(){if($window.width()>1200){return $img.addClass("with-summary");}
$img.removeClass("with-summary");}
$window.resize(resize).trigger("resize");$(document).ready(function($){$("#accordion").find(".accordion-toggle").click(function(){$(this).next().slideToggle("fast");$(".accordion-content").not($(this).next()).slideUp("fast");});});})(jQuery);