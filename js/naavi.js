$(document).ready(function() {	
    $(".nav ul").parent('li').addClass('clearfix parent');
    $('<span class="more">+++</span>').insertAfter($('.parent > a'));
    $("nav li .more").unbind('click').bind('click', function() {
		$(this).parent("li").toggleClass("hover");
        $(this).parent("li").siblings().removeClass("hover");
	});
});
