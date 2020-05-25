
$('.navbar-toggler').on('click', ()=>{
	$('.navbar-toggler span').toggleClass('fa-bars');
	$('.navbar-toggler span').toggleClass('fa-times');
	$('.navbar-toggler').toggleClass('unclickable');
	setTimeout(()=>{
		$('.navbar-toggler').toggleClass('unclickable');
	},600);
});