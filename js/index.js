'use strict';
function AddNintendoButtonEvents(){

    $(".nintendo-cross-button").not(".nintendo-cross-button-middle")
        .mousedown(function(){
            $(this).css("transform", "scale(0.95)");
        })
        .mouseup(function(){
            $(this).css("transform", "scale(1.0)");
        });

    $("#nintendo-select-button")
        .mousedown(function(){
            $(this).css("transform", "scale(0.95)");
        })
        .mouseup(function(){
            $(this).css("transform", "scale(1.0)");
        });

    $("#nintendo-start-button")
        .mousedown(function(){
            $(this).css("transform", "scale(0.95)");
        })
        .mouseup(function(){
            $(this).css("transform", "scale(1.0)");
        });

    $(".nintendo-circle-button")
        .mousedown(function(){
            $(this).css("transform", "scale(0.95)");
        })
        .mouseup(function(){
            $(this).css("transform", "scale(1.0)");
        });

    $(".nintendo-cross-button-left")
        .mousedown(function(){
            $(".carousel").carousel('prev');
        });

    $(".nintendo-cross-button-right")
        .mousedown(function(){
            $(".carousel").carousel('next');
        });

    $(".nintendo-circle-button-A")
        .mousedown(function(){
            window.location = $(".carousel-item.active > a").attr("href");
        });
}

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

    let typewriter = {
        text: [
            "User: Intruder/Password: ********",
            "Hi, intruder! I am Donghoon Jang, a third-year student at ANU studying software engineering.",
            "I built this blog because I thought it would be a great way of showing what I'm interested and capable of!",
            "Here, I will post what I learn from Uni or personal projects and discuss how I worked around difficulties that I encountered.",
            "I will mainly post updates on the two games I am working in Unity3D and also on Security!",
            "Checkout the posts on other mini projects in the \"extra\" tab!",
            "Just FYI, this blog was made with HTML, CSS, Bootstrap, Javascript(Jquery) and PHP on LAMP Stack on AWS!",
            "- Blog is not complete yet (2018.09.11)-"
        ],
        timeouts: [],
        current: 0,
        interval: 25,
        target: 'typewriter',
        nextBtn: 'typewriter-nextbtn',
        prevBtn: 'typewriter-prevbtn',

        init: function (sec) {

            this.interval = sec;

            document.getElementById(this.nextBtn).onmousedown = function(){
                event.preventDefault();
                typewriter.next();
                typewriter.write();
            };

            document.getElementById(this.prevBtn).onmousedown = function(){
                event.preventDefault();
                typewriter.prev();
                typewriter.write();
            };

        },

        write: function (){

            var str = this.text[this.current];
            var elem = document.getElementById(this.target);

            /*

            if (this.current >= 2){

                elem.innerText = "";

                for (let i = 1; i < this.current; i++){
                    var pNode = document.createElement("p");
                    var tNode = document.createTextNode(this.text[i]);

                    pNode.appendChild(tNode);
                    elem.appendChild(pNode);
                }
            }

            else {
                elem.innerText = "";
            }
            */

            elem.innerText = "";

            this._clearTimeouts();

            for (let i = 0; i < str.length; i++){
                this.timeouts.push(setTimeout(function(){
                    elem.innerHTML = elem.innerHTML + str.charAt(i);
                }, this.interval * i));
            }

            this._hideBtn();
            this._showBtn();
        },

        next: function() {
            if ((typewriter.current +1) < typewriter.text.length){
                typewriter.current++;
            }
        },

        prev: function() {
            if ((this.current -1) >= 0){
                this.current--;
            }
        },

        _showBtn: function(){
            if ((this.current +1) >= this.text.length){
                document.getElementById(this.nextBtn).style.display = "none";
            }

            else {
                document.getElementById(this.nextBtn).style.display = "inline-block";
            }


            if ((this.current -1) < 0){
                document.getElementById(this.prevBtn).style.display = "none";
            }

            else {
                document.getElementById(this.prevBtn).style.display = "inline-block";
            }
        },

        _hideBtn: function(){
            document.getElementById(this.nextBtn).style.display = "none";
            document.getElementById(this.prevBtn).style.display = "none";
        },

        _clearTimeouts : function(){
            var t;

            while (this.timeouts.length){
                t = this.timeouts.pop();
                window.clearTimeout(t);
            }
        }

    };

    typewriter.init(25);
    typewriter.write();
    AddNintendoButtonEvents();
    showRSS('https://www.darkreading.com/rss_simple.asp');
});