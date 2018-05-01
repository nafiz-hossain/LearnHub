searchhelper.perform_google = function(){

    if(typeof(google)!='undefined'){
        google.search.cse.element.render({
            div: "google-search-results",
            tag: 'searchresults-only',
            gname: 'google-results-gname'
        });
        var element = google.search.cse.element.getElement('google-results-gname');
        var query = $('##search-q').val();
        element.execute(query);
    }
};

(function(){
    // add the google custom stuff:
    var cx = '004626212387516433456:aex2tyveipy';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    //gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
})();

window.__gcse = {
  parsetags: 'explicit',
  callback: function(){
    searchhelper.search('all');
  }
};