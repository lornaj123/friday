console.log('is this working?');

// click on the arrow in the header
// scroll down to the correct section rather than jump down

// 1. select something 

// 2. perform an action 
$('header a').click( function(){
// instructions go in here
	console.log('clicked on the header a ?');
	
	// scroll down the page 
	// - select whole page  'html, body'
	// - jquery animate to move the top of the window down the page
	// specify a duration for the animation

	// 100 = how far we are going to scroll down, 1000 is the number of milliseconds that it should take
	// calculate the distance to scroll to the target section

	var href = $(this).attr('href');

	console.log(href);

	// store information in a variable

	var distanceToScroll = $(href).offset().top;

	console.log(distanceToScroll);

	$('html,body').animate({ scrollTop : distanceToScroll}, 1000 );

	// stop the default action (jumping down the page)
	// everything afte return is ignored - should be the last line of code within the function
	return false; 
});
