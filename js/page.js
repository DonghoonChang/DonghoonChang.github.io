'use strict';

function showRSS(str) {
    let xmlhttp;

    if (str.length == 0) {
        document.getElementById("rss-container").innerHTML="";
        return;
    }

    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();

    } else {  // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {

            document.getElementById("rss-container").innerHTML=this.responseText;

            $("#rss-container").addClass("rss-scroll-anim");
        }
    }

    // Comment
    xmlhttp.open("GET","php/getrss.php?q="+str,true);
    xmlhttp.send();
}

$(document).ready(function(){
    $(".collapse-box").each(function(){
        $(this).attr("collapsed", "false");
    });

    $(".collapse-box").each(function(){

        $(this).click(function(){

            if ($(this).attr("collapsed") == "false")
            {
                $(".collapse-box").attr("collapsed", "true");
                $(this).find(".collapse-box-text").fadeOut();
            }

            else {
                $(".collapse-box").attr("collapsed", "false");
                $(this).find(".collapse-box-text").fadeIn();
            }
        });
    });
});