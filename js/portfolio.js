$( document ).ready(function() {
	var i = 0;
	var txt = "Hi, I'm Abhijeet.";
	var speed = 200;

	

	setTimeout(function typeWriter() {
	  if (i < txt.length) {
	    document.getElementById("head").innerHTML += txt.charAt(i);
	    i++;
	    setTimeout(typeWriter, speed);
	  }
	  else
	  {
	  	$( "p:hidden:first" ).fadeIn( "slow" );
	  	$( "button:hidden:first" ).fadeIn( "slow" );
	  }
	},2000);


	// Add smooth scrolling to all links
	  $("a").on('click', function(event) {

	    // Make sure this.hash has a value before overriding default behavior
	    if (this.hash !== "") {
	      // Prevent default anchor click behavior
	      event.preventDefault();

	      // Store hash
	      var hash = this.hash;

	      // Using jQuery's animate() method to add smooth page scroll
	      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	      $('html, body').animate({
	        scrollTop: $(hash).offset().top
	      }, 800, function(){
	   
	        // Add hash (#) to URL when done scrolling (default click behavior)
	        window.location.hash = hash;
	      });
	    } // End if
	  });
});

