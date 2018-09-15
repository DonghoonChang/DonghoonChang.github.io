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