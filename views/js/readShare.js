var getUrlParameter = function getUrlParameter(sParam) {
	var sPageURL = decodeURIComponent(window.location.search.substring(1)),
	sURLVariables = sPageURL.split('&'),
	sParameterName,
	i;

	for (i = 0; i < sURLVariables.length; i++) {
		sParameterName = sURLVariables[i].split('=');

		if (sParameterName[0] === sParam) {
			return sParameterName[1] === undefined ? true : sParameterName[1];
		}
	}
};

var tt;
var anchorSelected;
var userEmail = getUrlParameter('email');
var anchor = 0;
anchor = getUrlParameter('anchor');
// console.log(userEmail);


$.get('/share', function(req) {
	var userEmail = $.url().param("email");
	
});
$.get( "/shareOperation", { email: userEmail } )
.done(function( req ) {
	// console.log(req);
	tt = req;
	$(".sidebar-nav").html('');
	$(".sprint-xs").html('');

	anchorSelected = 0;
	var setText = function(){

		$(".content").html("<h1 class='text-center'>Sprint " + anchorSelected + "</h1>");
		$(".content").append("<div class='form-group'><textarea id='textArea' disabled class='form-control textarea' rows='20' id='comment' placeholder='Take your notes here!'>" + tt.local.sprint[anchorSelected] + "</textarea></div>");
	}

	for (var i = 0, len = tt.local.sprint.length; i < len; i++) {
		if(anchor == i){
			$(".sidebar-nav").append("<li><a class='active' data-index='"+i+"' href='#'>Sprint "+i+"</a></li>");
			$(".sprint-xs").append("<li><a class='sprint-anchors' data-index='"+i+"' href='#'>Sprint "+i+"</a></li>");
		}else{
			$(".sidebar-nav").append("<li><a data-index='"+i+"' href='#'>Sprint "+i+"</a></li>");
			$(".sprint-xs").append("<li><a class='sprint-anchors' data-index='"+i+"' href='#'>Sprint "+i+"</a></li>");
		}
	}

	setText();
	$(document).on( "click", ".sidebar-nav a", function() {
		anchorSelected = $(this).attr("data-index");
		setText();
	});
	$(document).on( "click", ".sprint-xs .sprint-anchors", function() {
		anchorSelected = $(this).attr("data-index");
		setText();
	});
});


$(document).on( "click", ".sidebar-nav a", function() {
	$(".sidebar-nav a").removeClass("active");
	$(this).addClass("active");
});