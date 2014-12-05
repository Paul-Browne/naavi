	$(".nav li a").each(function() {
		if ($(this).next().length) {
			$(this).addClass("parent");
		};
	});
