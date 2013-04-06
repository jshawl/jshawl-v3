$('[data-lang]').each(function(){
	// get the language
	console.log($(this));
	var language = $(this).attr('data-lang');
	console.log(language);
	// add the data-lang as a class to the next sibling
	$(this).parent().next().addClass(language);
	//$(this).closest('pre').css({'border':'5px solid red'});
});

$('pre').addClass('prettyprint');
window.prettyPrint && prettyPrint()  
