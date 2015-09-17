var tt;
var anchorSelected;
var t2 = "t2";

var updateProfile = function(){
	$.get('/sprint', function(req) {
		tt = req;
		$(".sidebar-nav").html('');
		$(".sprint-xs").html('');

		anchorSelected = 0;
		var setText = function(){

			$(".content").html("<h1 class='text-center'>Sprint " + anchorSelected + "</h1>");
			$(".content").append("<div class='form-group'><textarea class='form-control textarea' rows='20' id='comment'>" + tt.local.sprint[anchorSelected] + "</textarea></div>");
		}

		for (var i = 0, len = tt.local.sprint.length; i < len; i++) {
			$(".sidebar-nav").append("<li><a data-index='"+i+"' href='#'>Sprint "+i+"</a></li>");
			$(".sprint-xs").append("<li><a class='sprint-anchors' data-index='"+i+"' href='#'>Sprint "+i+"</a></li>");
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
	});
}
updateProfile();

$(document).on( "click", ".plus", function() {
	$.get( "/plus", { email: tt.local.email } )
	.done(function( data ) {
		
	});
	window.location.reload();
});
$(document).on( "click", ".save", function() {

	$.get( "/save", { email: tt.local.email, anchor :  anchorSelected, textarea : $(".textarea").val() } )
	.done(function( data ) {
		
	});
	window.location.reload();
});