/*!
=========================================================
Feffy's Landing page
=========================================================
*/

// smooth scroll
$(document).ready(function(){
	$(".nav-link").on('click', function(event) {

    	if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function(){
				window.location.hash = hash;
			});
      	} 
    });
});

window.onbeforeunload = () => {
	for(const form of document.getElementsByTagName('form')) {
	  form.reset();
	}
  }