$(function () {
	console.log("window loaded")
	var number
	scrolltop = 0
	// $('.fade').each( function ( i, d ) {
	// 	number = number || 300
	// 	stylizeWords($(d), number, 100, 50, "fade")
	// 	number += 100
	// });

	$('.fade').each( function ( i, d ) {
		number = number || 300
		stylizeWords($(d), number, 100, 50, "fade")
		number += 100
	});

	var number2
	$('#boyasks').each( function ( i, d ) {
		number2 = number2 || 51500
		stylizeWords($(d), number2, 100, 50, "fade")
		number2 += 100
	});

	var number3
	$('#boyasks2').each( function ( i, d ) {
		number3 = number3 || 58400
		stylizeWords($(d), number3, 100, 50, "fade")
		number3 += 100
	});

	var number4
	$('#boyasks3').each( function ( i, d ) {
		number4 = number4 || 61300
		stylizeWords($(d), number4, 100, 50, "fade")
		number4 += 100
	});

	var number5
	$('#boyasks4').each( function ( i, d ) {
		number5 = number5 || 66000
		stylizeWords($(d), number5, 100, 50, "fade")
		number5 += 100
	});

	var pages = [2600, 6100, 9500, 13700]

	$('#info').click( function (e) {
		switch(true) {
			case (scrolltop < 2600):
				$("html, body").animate({ scrollTop: "2600px"}, ( ( (2600-scrolltop) / 2600 ) * 5000 ) );
				return false
			case (scrolltop < 6100):
				$("html, body").animate({ scrollTop: "6100px"}, 5000);
				return false
			case (scrolltop < 9500):
				$("html, body").animate({ scrollTop: "9500px"}, 5000);
				return false
			case (scrolltop < 13700):
				$("html, body").animate({ scrollTop: "13700px"}, 6000);
				return false
		}
	})

	var s = skrollr.init({
		render: function(data) {
		  //Log the current scroll position.
		  $('#info').text(data.curTop);
		  scrolltop = data.curTop;
		}, 
    smoothScrolling : 'true'
	});
});

function stylizeWords ($dom, skroll, skrollInterval, letterInterval, effect) {
	var s = skroll
	var interval = skroll + 0
	$dom.lettering().children().each(function (index, child) {
		var obj = {}
		var data1 = 'data-'+interval
		var data2 = 'data-'+(interval + skrollInterval)

		if(effect == "fade"){
			obj[data1] = "opacity: 0;"
			obj[data2] = "opacity: 1;"
		}
		else if(effect == "fall") {
			obj[data1] = "opacity: 0; opacity: 1; transform: translateY(-20px);"
			obj[data2] = "opacity: 1; opacity: 1; transform: translateY(0px); display: inline-block;"
		}

		$(child).attr( obj )
		interval += letterInterval
	})
}