$(document).ready(function(){
    var $iframe = $("iframe");
    $iframe.on('load', function(){
        $iframe.contents().find("div").append("<p>test2</p>");
    });
});