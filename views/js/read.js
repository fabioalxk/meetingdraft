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

var anchor = 0;
anchor = getUrlParameter('anchor');
console.log(anchor);
var tt;
var anchorSelected;
var t2 = "t2";

var updateProfile = function(){
	$.get('/sprint', function(req) {
		tt = req;
		$(".sidebar-nav").html('');
		$(".sprint-xs").html('');

		if(typeof anchor != 'undefined'){
			anchorSelected = anchor;
		}else{
			anchorSelected = 0;
		}
		
		var setText = function(){

			$(".content").html("<h1 class='text-center'>Sprint " + anchorSelected + "</h1>");
			$(".content").append("<div class='form-group'><textarea class='form-control textarea' rows='20' id='comment' placeholder='Take your notes here!'>" + tt.local.sprint[anchorSelected] + "</textarea></div>");
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

	// Sharing feature
	var user = $.url().param("user");
	// end Sharing feature
	// console.log(user);
});
}
updateProfile();

$(document).on( "click", ".plus", function() {
	save();
	$.get( "/plus", { email: tt.local.email } )
	.done(function( data ) {
		
	});
	window.location="/profile/?anchor=" + anchorSelected;
});
$(document).on( "click", ".minus", function() {
	$.get( "/minus", { email: tt.local.email } )
	.done(function( data ) {
		
	});
	window.location="/profile/?anchor=" + anchorSelected;
});

var save = function(){

	$.get( "/save", { email: tt.local.email, anchor :  anchorSelected, textarea : $(".textarea").val() } )
	.done(function( data ) {

	});
	
}

$(document).on( "click", ".save", function() {
	save();
	window.location="/profile/?anchor=" + anchorSelected;
});
$(document).on( "click", ".sidebar-nav a", function() {
	$(".sidebar-nav a").removeClass("active");
	$(this).addClass("active");
});



