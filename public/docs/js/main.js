$('[data-lang]').each(function(){

    // get the language
    var language = $(this).attr('data-lang');

    // add the data-lang as a class to the next sibling
    // this is pretty hack-y at the moment. The way I've been 
    // writing markdown generates a DOM node that looks like this:
    // <p>
    //   Some text explaining the next code block
    //   <span data-lang='lang-js'></span>
    // </p>
    // <pre class='prettify'>
    //   <code>
    //      // code!
    //   </code>
    // </pre>
    //
    // So I know (accurately guess) that the next code block can be referenced as:
    // The next sibling of the parent of the span with the class [data-lang]
    //
    //  It might make more sense to look at a markdown example: 
    //  https://github.com/jshawl/jshawl-v3/blob/master/content/2.thoughts/2.dealing-with-rate-limited-apis/single.txt#L54-59

    $(this).parent().next().addClass(language);

});

$('pre').addClass('prettyprint');
window.prettyPrint && prettyPrint()  
